import { createContext, useContext } from "react";
// Themes
import { base } from "./base";
// Types
import { PrismaneTheme } from "../types";

export interface ThemeContextValue {
  theme: PrismaneTheme;
  changeTheme: Function;
  toggleThemeMode: Function;
}

const defaultValues = {
  theme: base,
  changeTheme: () => {},
  toggleThemeMode: () => {},
};

const ThemeContext = createContext<ThemeContextValue>(defaultValues);

export const ThemeContextProvider = ThemeContext.Provider;

export const useThemeContext = () => useContext(ThemeContext);
