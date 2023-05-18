import { ReactNode, Dispatch, createContext, useContext } from "react";

export interface ToastProps {
  element: ReactNode;
  visible: boolean;
}

export interface ToastContextValue {
  toasts: ToastProps[];
  setToasts: Dispatch<ToastProps[]>;
}

const ToastContext = createContext<ToastContextValue>({
  toasts: [],
  setToasts: () => {},
});

export const ToastContextProvider = ToastContext.Provider;

export const useToastContext = () => useContext(ToastContext);
