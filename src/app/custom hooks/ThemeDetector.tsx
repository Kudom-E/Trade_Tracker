"use client";

import React, { useState, useEffect } from "react";

export const useThemeDetector = (): boolean => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    const getCurrentTheme = (): boolean => {
      if (typeof window !== "undefined" && window.matchMedia) {
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
      }
      return false;
    };

    setIsDarkTheme(getCurrentTheme());
  }, []);

  useEffect(() => {
    const mqListener = (e: MediaQueryListEvent): void => {
      setIsDarkTheme(e.matches);
    };

    if (typeof window !== "undefined") {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      darkThemeMq.addEventListener("change", mqListener);
      return () => darkThemeMq.removeEventListener("change", mqListener);
    }
  }, []);

  return isDarkTheme;
};
