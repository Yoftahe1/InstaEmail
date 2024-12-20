import { create } from "zustand";

interface ThemeState {
  mode: "light" | "dark";
  changeMode: (value: "light" | "dark") => void;
}

const useThemeStore = create<ThemeState>()((set) => ({
  mode: "dark",
  changeMode: (value) => set(() => ({ mode: value })),
}));

export default useThemeStore;
