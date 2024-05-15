// Type
import { PrismaneBreakpoints } from "./breakpoints.type";

type PrismaneField = {
  id?: string;
  error?: string | null;
  label?: string;
  size?: PrismaneBreakpoints;
  variant?: "outlined" | "filled" | "underlined" | "unstyled";
  addons?: React.ReactNode;
  icon?: React.ReactNode;
  validating?: boolean;
};

export type PrismaneFieldComponent = PrismaneField &
  Omit<JSX.IntrinsicElements["input"], keyof PrismaneField>;
