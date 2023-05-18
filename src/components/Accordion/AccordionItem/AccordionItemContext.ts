import { createContext, useContext } from "react";

export interface AccordionItemContextValue {
  value: string;
}

const AccordionItemContext = createContext<AccordionItemContextValue>({
  value: "",
});

export const AccordionItemContextProvider = AccordionItemContext.Provider;

export const useAccordionItemContext = () => useContext(AccordionItemContext);
