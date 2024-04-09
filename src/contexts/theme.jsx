import React from "react";
import { useState, useCallback, useContext } from "react";

export const ThemeContext = React.createContext("default");

export function useTheme(defaultTheme = "default") {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) =>
      currentTheme === "default" ? "dark" : "default"
    );
  }, []);

  return { theme, toggleTheme };
}

export function useCurrentTheme() {
  return useContext(ThemeContext);
}
