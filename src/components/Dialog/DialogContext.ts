import { createContext, useContext } from "react";

export interface DialogContextValue {
  open?: boolean;
  closable?: boolean;
  onClose?: () => void;
}

const DialogContext = createContext<DialogContextValue>({
  open: true,
  closable: false,
  onClose: () => {},
});

export const DialogContextProvider = DialogContext.Provider;

export const useDialogContext = () => useContext(DialogContext);
