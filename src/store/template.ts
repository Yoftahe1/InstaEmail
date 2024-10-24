// import { create } from "zustand";
// import { produce } from "immer"; // Import produce from immer
// import JSONNode from "../types/generator";

// interface TemplateState {
//   template: JSONNode | null;
//   component: JSONNode | null;
//   componentPath: string;
//   selectComponent: (value: JSONNode, path: string) => void;
//   changeValue: <Option extends keyof JSONNode>(
//     option: Option,
//     value: JSONNode[Option]
//   ) => void;
// }

// const useTemplateStore = create<TemplateState>()((set) => ({
//   template: {
//     type: "container",
//     align: "center",
//     justify: "center",
//     direction: "column",
//     bgColor: "00ff00",
//     height: 500,
//     content: [
//       {
//         type: "container",
//         height: 300,
//         width: 300,
//         align: "center",
//         justify: "center",
//         direction: "column",
//         bgColor: "ff00ff",
//         content: [
//           {
//             type: "image",
//             width: 200,
//             height: 200,
//             radius: 50,
//             alt: "jhj",
//             content:
//               "https://images.unsplash.com/photo-1576158113928-4c240eaaf360?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//           },
//           {
//             type: "text",
//             width: 200,
//             radius: 50,
//             color: "000000",
//             bgColor: "0000ff",
//             content: "Hello",
//           },
//         ],
//       },
//       {
//         type: "button",
//         width: 200,
//         radius: 50,
//         pt: 20,
//         pl: 15,
//         pb: 10,
//         pr: 5,
//         mt: 20,
//         ml: 15,
//         mb: 10,
//         mr: 5,
//         color: "00ff00",
//         content: "submit",
//       },
//       {
//         type: "text",
//         width: 200,
//         radius: 50,
//         color: "000000",
//         bgColor: "0000ff",
//         content: "Hello",
//       },
//     ],
//   },
//   component: null,
//   componentPath: "",
//   selectComponent: (value, path) =>
//     set(() => ({ component: value, componentPath: path })),
//   changeValue: (option, value) =>
//     set((state) =>
//       produce(state, (draft) => {
//         if (draft.component) {
//           draft.component[option] = value;

//           const updateTemplate = (template: JSONNode | null, path: string) => {
//             if (!template || !path) return;

//             const keys = path.split("/").filter(Boolean);
//             let current = template;

//             for (let i = 0; i < keys.length - 1; i++) {
//               const key = keys[i];
//               const indexMatch = key.match(/\d+/);
//               const index = indexMatch ? parseInt(indexMatch[0], 10) : null;

//               if (Array.isArray(current.content) && index !== null) {
//                 current = current.content[index];
//               } else if (
//                 current.content &&
//                 typeof current.content === "object"
//               ) {
//                 return;
//               }
//             }

//             const lastKey = keys[keys.length - 1];
//             const lastIndexMatch = lastKey.match(/\d+/);
//             const lastIndex = lastIndexMatch
//               ? parseInt(lastIndexMatch[0], 10)
//               : null;

//             if (current) {
//               if (Array.isArray(current.content) && lastIndex !== null) {
//                 if (draft.component)
//                   current.content[lastIndex] = draft.component;
//               } else if (typeof current.content === "object") {
//                 if (draft.component) {
//                   if (!Array.isArray(current.content)) {
//                     (current.content as Record<string, JSONNode>)[lastKey] =
//                       draft.component;
//                   }
//                 }
//               }
//             }
//           };

//           updateTemplate(draft.template, draft.componentPath);
//         }
//       })
//     ),
// }));

// export default useTemplateStore;

import create from "zustand";
import { immer } from "zustand/middleware/immer";
import JSONNode from "../types/generator";

type State = {
  template: JSONNode | null;
  component: JSONNode | null;
  componentPath: string;
};

type Actions = {
  selectComponent: (value: JSONNode, path: string) => void;
  changeValue: <Option extends keyof JSONNode>(
    option: Option,
    value: JSONNode[Option]
  ) => void;
};

const useTemplateStore = create<State & Actions>()(
  immer((set) => ({
    template: {
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
      ],
    },
    component: null,
    componentPath: "",
    selectComponent: (value, path) =>
      set(() => ({ component: value, componentPath: path })),
    changeValue: (option, value) =>
      set((state) => {
        if (!state.component || !state.template) return;
        state.component[option] = value;

        const updateTemplate = (template: JSONNode, path: string) => {
          let keys = path.split("/");
          if (keys.length === 1) {
            state.template = {
              ...template,
              [option]: value,
            };
          } else {
            keys = path.split("/").filter(Boolean);
            let current = template;

            for (let i = 0; i < keys.length - 1; i++) {
              const key = Number(keys[i]); // Convert the key to a number
              if (Array.isArray(current.content)) {
                current = current.content[key]; // Traverse to the next level
              } else {
                throw new Error("Invalid path or template structure");
              }
            }

            // Get the last key and update the component
            const lastKey = parseInt(keys[keys.length - 1], 10);
            if (Array.isArray(current.content)) {
              current.content[lastKey] = {
                ...current.content[lastKey],
                [option]: value, // Update the specific option
              };
            }
          }
        };

        updateTemplate(state.template, state.componentPath);
      }),
  }))
);

export default useTemplateStore;
