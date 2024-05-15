import { createContext, useContext, Dispatch } from "react";
// Types
import { PrismanePositions } from "@types";

export interface PopoverContextValue {
  open: boolean;
  setOpen: Dispatch<boolean>;
  position: PrismanePositions;
}

const PopoverContext = createContext<PopoverContextValue>({
  open: false,
  setOpen: () => {},
  position: "bottom",
});

export const PopoverContextProvider = PopoverContext.Provider;

export const usePopoverContext = () => useContext(PopoverContext);
