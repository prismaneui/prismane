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

const ThemeContext = createContext<ThemeContextValue>({
  theme: { ...base },
  changeTheme: () => {},
  toggleThemeMode: () => {},
});

export const ThemeContextProvider = ThemeContext.Provider;

export const useThemeContext = () => useContext(ThemeContext);
