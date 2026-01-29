"use client"
import { useState } from "react";
import { ThemeProvider as MaterialTheme } from "@mui/material";
import ThemeContext from "./ThemeContext";
import { darkTheme } from "../theme/modules/dark";
import { lightTheme } from "../theme/modules/light";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDark, setIsDark] = useState(true);

  return (
    <ThemeContext.Provider value={{ isDark: isDark }}>
      <MaterialTheme theme={isDark ? darkTheme : lightTheme}>
        {children}
      </MaterialTheme>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
