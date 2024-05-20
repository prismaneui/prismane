import React, { createContext, useContext } from "react";

export type AccordionItemContextProps = string | null;

const AccordionItemContext = createContext<AccordionItemContextProps>("");

export const AccordionItemContextProvider = AccordionItemContext.Provider;

export const useAccordionItemContext = () => useContext(AccordionItemContext);
