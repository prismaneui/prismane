import { Dispatch, createContext, useContext } from "react";
// Themes
import { base } from "../../themes/base";
// Types
import { PrismaneTheme } from "../../types";

export interface PrismaneContextValue {
  theme: PrismaneTheme;
  setTheme: Dispatch<PrismaneTheme>;
  toggleThemeMode: Function;
}

export const PrismaneContext = createContext<PrismaneContextValue>({
  theme: base,
  setTheme: () => {},
  toggleThemeMode: () => {},
});

export const PrismaneContextProvider = PrismaneContext.Provider;

export const usePrismaneTheme = () => useContext(PrismaneContext);
