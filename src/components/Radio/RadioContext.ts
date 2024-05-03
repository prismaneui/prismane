import { createContext, useContext } from "react";
import { PrismaneFieldComponent } from "@/types";

export type RadioContextValue = PrismaneFieldComponent;

const RadioContext = createContext<RadioContextValue>({});

export const RadioContextProvider = RadioContext.Provider;

export const useRadioContext = () => useContext(RadioContext);
