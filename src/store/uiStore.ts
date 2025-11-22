// src/store/uiStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark";

type UIState = {
  theme: Theme;
  isMobileMenuOpen: boolean;
  activeProjectFilter: string;

  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  setProjectFilter: (filter: string) => void;
};

const applyThemeClass = (theme: Theme) => {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
};

export const useUIStore = create<UIState>()(
  persist(
    (set, get) => ({
      theme: "dark",
      isMobileMenuOpen: false,
      activeProjectFilter: "all",

      toggleTheme: () => {
        const next: Theme = get().theme === "light" ? "dark" : "light";
        set({ theme: next });
        applyThemeClass(next); // 🔥 actually update <html>
      },

      setTheme: (theme: Theme) => {
        set({ theme });
        applyThemeClass(theme); // 🔥 for manual setting / hydration
      },

      toggleMobileMenu: () =>
        set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),

      closeMobileMenu: () => set({ isMobileMenuOpen: false }),

      setProjectFilter: (filter) => set({ activeProjectFilter: filter }),
    }),
    {
      name: "portfolio-ui",
    }
  )
);
