"use client";

import { ReactNode, useEffect } from "react";
import { useUIStore } from "@/store/uiStore";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useUIStore((s) => s.theme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return <>{children}</>;
}
