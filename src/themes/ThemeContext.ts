import { createContext, useContext } from "react";

export interface ThemeContextValue {
  theme: any;
  changeTheme: Function;
  toggleThemeMode: Function;
}

const defaultValues = {
  theme: {},
  changeTheme: () => {},
  toggleThemeMode: () => {},
};

const ThemeContext = createContext<ThemeContextValue>(defaultValues);

export const ThemeContextProvider = ThemeContext.Provider;

export const useThemeContext = () => useContext(ThemeContext);
