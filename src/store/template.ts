import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import JSONNode from "../types/generator";

type State = {
  template: JSONNode[];
  path: string;
};

type Actions = {
  setPath: (path: string) => void;
  deleteComponent: (path: string) => void;
  addComponent: (component: JSONNode, path: string) => void;
  changeValue: <Option extends keyof JSONNode>(
    option: Option,
    value: JSONNode[Option]
  ) => void;
};

const useTemplateStore = create<State & Actions>()(
  immer((set) => ({
    template: [],
    component: null,
    path: "",
    addComponent: (component: JSONNode, path: string) =>
      set((state) => {
        if (!path) {
          state.template = [...state.template, component];
        } else {
          const keys = path.split("/").map(Number);
          let current = state.template;

          for (let i = 0; i < keys.length - 1; i++) {
            const key = keys[i];

            if (Array.isArray(current[key].content)) {
              current = current[key].content;
            }
          }

          const lastKey = keys[keys.length - 1];
          if (Array.isArray(current[lastKey].content)) {
            current[lastKey].content.push(component);
          }
        }
      }),
    setPath: (path) => set(() => ({ path })),
    deleteComponent: (path: string) =>
      set((state) => {
        const keys = path.split("/").map(Number);
        if (keys.length === 1) {
          state.template = state.template.filter(
            (_, index) => index !== keys[0]
          );
        } else {
          let current: JSONNode[] | JSONNode = state.template;

          const lastKey = keys.pop();
          if (lastKey === undefined) return;

          for (const key of keys) {
            if (Array.isArray(current)) {
              current = current[key];
            } else if (current && Array.isArray(current.content)) {
              current = current.content[key];
            } else {
              return;
            }
          }

          if (!Array.isArray(current) && Array.isArray(current.content)) {
            current.content.splice(lastKey, 1);
          }
        }
        state.path = "";
      }),
    changeValue: (option, value) =>
      set((state) => {
        const updateTemplate = (template: JSONNode, path: string) => {
          let keys = path.split("/");
          if (keys.length === 1) {
            state.template[Number(path[0])] = {
              ...template,
              [option]: value,
            };
          } else {
            keys = path.slice(2).split("/").filter(Boolean);
            let current = template;

            for (let i = 0; i < keys.length - 1; i++) {
              const key = Number(keys[i]);
              if (Array.isArray(current.content)) {
                current = current.content[key];
              }
            }

            const lastKey = parseInt(keys[keys.length - 1], 10);
            if (Array.isArray(current.content)) {
              current.content[lastKey] = {
                ...current.content[lastKey],
                [option]: value,
              };
            }
          }
        };

        updateTemplate(state.template[Number(state.path[0])], state.path);
      }),
  }))
);

export default useTemplateStore;
