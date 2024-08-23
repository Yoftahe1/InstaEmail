import { create } from "zustand";

interface ThemeState {
  component: "Button" | "Container"|"Image" |"Text";
  changeComponent: (value: "Button" | "Container"|"Image" |"Text") => void;
}

const useThemeStore = create<ThemeState>()((set) => ({
  component: "Container",
  changeComponent: (value) => set(() => ({ component: value })),
}));

export default useThemeStore;
