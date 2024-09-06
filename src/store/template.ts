import { create } from "zustand";
import JSONNode from "../types/generator";

interface TemplateState {
  template: JSONNode | null;
  component: JSONNode | null;
  selectComponent: (value: JSONNode) => void;
}

const useTemplateStore = create<TemplateState>()((set) => ({
  template: {
    type: "container",
    align: "center",
    justify: "center",
    direction: "column",
    bgColor: "00ff00",
    height: 500,
    content: [
      // {
      //   type: "image",
      //   width: 200,
      //   radius: 50,
      //   alt: "jhj",
      //   content:
      //     "https://images.unsplash.com/photo-1576158113928-4c240eaaf360?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      // },
      // {
      //   type: "button",
      //   width: 200,
      //   radius: 50,
      //   pt: 20,
      //   pl: 15,
      //   pb: 10,
      //   pr: 5,
      //   mt: 20,
      //   ml: 15,
      //   mb: 10,
      //   mr: 5,
      //   color: "00ff00",
      //   content: "submit",
      // },
      // {
      //   type: "text",
      //   width: 200,
      //   radius: 50,
      //   color: "000000",
      //   bgColor: "0000ff",
      //   content: "Heloo",
      // },
    ],
  },
  component: null,
  selectComponent: (value) => set(() => ({ component: value })),
}));

export default useTemplateStore;
