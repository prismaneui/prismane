import { createContext, useContext, Dispatch } from "react";

export interface TabsContextValue {
  variant: "underlined" | "filled";
  value: string | null;
  setValue: Dispatch<string | null>;
}

const TabsContext = createContext<TabsContextValue>({
  variant: "underlined",
  value: "",
  setValue: () => {},
});

export const TabsContextProvider = TabsContext.Provider;

export const useTabsContext = () => useContext(TabsContext);
