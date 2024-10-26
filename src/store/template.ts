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
    template: [
      {
        type: "text",
        width: 200,
        radius: 50,
        color: "000000",
        bgColor: "0000ff",
        content: "Hello",
      },
      {
        type: "container",
        align: "center",
        justify: "center",
        direction: "column",
        bgColor: "00ff00",
        height: 500,
        content: [
          {
            type: "container",
            height: 300,
            width: 300,
            align: "center",
            justify: "center",
            direction: "column",
            bgColor: "ff00ff",
            content: [
              {
                type: "image",
                width: 200,
                height: 200,
                radius: 50,
                alt: "jhj",
                content:
                  "https://images.unsplash.com/photo-1576158113928-4c240eaaf360?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                type: "text",
                width: 200,
                radius: 50,
                color: "000000",
                bgColor: "0000ff",
                content: "Hello",
              },
            ],
          },
          {
            type: "button",
            width: 200,
            radius: 50,
            pt: 20,
            pl: 15,
            pb: 10,
            pr: 5,
            mt: 20,
            ml: 15,
            mb: 10,
            mr: 5,
            color: "00ff00",
            content: "submit",
          },
          {
            type: "text",
            width: 200,
            radius: 50,
            color: "000000",
            bgColor: "0000ff",
            content: "Hello",
          },
          {
            type: "text",
            width: 200,
            radius: 50,
            color: "000000",
            bgColor: "0000ff",
            content: "Hello",
          },
        ],
      },
      {
        type: "text",
        width: 200,
        radius: 50,
        color: "000000",
        bgColor: "0000ff",
        content: "hellcat",
      },
    ],
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
        state.path=""
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
