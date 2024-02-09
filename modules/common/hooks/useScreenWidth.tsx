"use client";

import { useEffect, useState } from "react";

type TailwindBreakpoint = "sm" | "md" | "lg" | "xl" | "2xl";

export type TailwindBreakpoints = {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  "2xl": number;
};

export default function useScreenWidth() {
  const breakpoints: TailwindBreakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
  };

  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    function handleScreenResize() {
      setScreenWidth(window.screen.width);
    }

    handleScreenResize();

    window.addEventListener("resize", handleScreenResize);

    return () => window.removeEventListener("resize", handleScreenResize);
  }, []);

  function isBreakpoint(screen: TailwindBreakpoint) {
    return breakpoints[screen] > screenWidth;
  }

  return { screenWidth, isBreakpoint };
}
