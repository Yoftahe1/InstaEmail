import { create } from "zustand";
import { NodeType } from "../types/generator";

interface ComponentState {
  component: NodeType;
  changeComponent: (value: NodeType) => void;
}

const useComponentStore = create<ComponentState>()((set) => ({
  component: "container",
  changeComponent: (value) => set(() => ({ component: value })),
}));

export default useComponentStore;
