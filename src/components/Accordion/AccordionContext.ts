import { createContext, useContext, Dispatch } from "react";

export interface AccordionContextValue {
  value?: string | null;
  setValue?: Dispatch<string | null>;
}

const AccordionContext = createContext<AccordionContextValue>({});

export const AccordionContextProvider = AccordionContext.Provider;

export const useAccordionContext = () => useContext(AccordionContext);
