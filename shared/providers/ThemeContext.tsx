"use client"
import { createContext } from "react";

interface ThemeContextType {
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  isDark: true
});

export default ThemeContext;
