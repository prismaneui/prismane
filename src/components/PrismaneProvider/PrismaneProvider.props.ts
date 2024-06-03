import { ReactNode } from "react";
// Types
import { PrismaneInputTheme } from "@types";

export type PrismaneProviderProps = {
  children: ReactNode;
  theme?: PrismaneInputTheme;
};
