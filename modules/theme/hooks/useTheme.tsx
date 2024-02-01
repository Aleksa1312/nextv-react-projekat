"use client";

import { useTheme as useNextTheme } from "next-themes";

export function useTheme() {
  const { setTheme, theme } = useNextTheme();
  const isDark = theme === "dark";

  function toggleTheme() {
    setTheme(isDark ? "light" : "dark");
  }

  function setLight() {
    setTheme("light");
  }

  function setDark() {
    setTheme("dark");
  }

  return { theme, setTheme, toggleTheme, setLight, setDark, isDark };
}
