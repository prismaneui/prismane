import { createContext, useContext } from "react";

export interface ModalContextValue {
  open?: boolean;
  closable?: boolean;
  onClose?: Function;
}

const ModalContext = createContext<ModalContextValue>({
  open: true,
  closable: false,
  onClose: () => {},
});

export const ModalContextProvider = ModalContext.Provider;

export const useModalContext = () => useContext(ModalContext);
