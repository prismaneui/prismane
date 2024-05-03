import { Dispatch, createContext, useContext } from "react";
// Types
import { ToastProps } from "./Toast";

export interface ToasterContextValue {
  toasts: ToastProps[];
  setToasts: Dispatch<any>;
}

const ToasterContext = createContext<ToasterContextValue>({
  toasts: [],
  setToasts: () => {},
});

export const ToasterContextProvider = ToasterContext.Provider;

export const useToasterContext = () => useContext(ToasterContext);
