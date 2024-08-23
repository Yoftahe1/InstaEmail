import { create } from "zustand";

interface ThemeState {
  mode: "light" | "dark";
  changeMode: (value: "light" | "dark") => void;
}

const useThemeStore = create<ThemeState>()((set) => ({
  mode: "light",
  changeMode: (value) => set(() => ({ mode: value })),
}));

export default useThemeStore;
