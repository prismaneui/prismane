import { createContext, useContext } from "react";

export interface DrawerContextValue {
  open?: boolean;
  closable?: boolean;
  onClose?: Function;
}

const DrawerContext = createContext<DrawerContextValue>({
  open: true,
  closable: false,
  onClose: () => {},
});

export const DrawerContextProvider = DrawerContext.Provider;

export const useDrawerContext = () => useContext(DrawerContext);
