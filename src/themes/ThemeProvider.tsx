import { ReactNode, FC, useEffect, useState } from "react";
// Context
import { ThemeContextProvider } from "./ThemeContext";
// Themes
import { PrismaneInputTheme, PrismaneTheme } from "../types";
import { applyTheme, createTheme, extendTheme } from "./theme";
import { base } from "./base";

export interface ThemeProviderProps {
  children: ReactNode;
  theme?: PrismaneInputTheme;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, theme = base }) => {
  const [currentTheme, setCurrentTheme] = useState(createTheme(theme));

  useEffect(() => {
    applyTheme(currentTheme);
  }, [currentTheme]);

  const toggleThemeMode = () => {
    const updatedTheme: PrismaneTheme = {
      ...extendTheme(currentTheme, {
        mode: currentTheme.mode === "dark" ? "light" : "dark",
      }),
    };
    setCurrentTheme(updatedTheme);
  };

  const changeTheme = (theme: PrismaneInputTheme) => {
    setCurrentTheme(createTheme(theme));
  };

  return (
    <ThemeContextProvider
      value={{ theme: currentTheme, changeTheme, toggleThemeMode }}
    >
      {children}
    </ThemeContextProvider>
  );
};

export default ThemeProvider;
