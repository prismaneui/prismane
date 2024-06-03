import { ReactNode } from "react";
// Component Props
import { TransitionProps } from "@components/Transition";
// Types
import {
  PrismaneBreakpoints,
  PrismaneColors,
  Versatile,
  PrismaneVersatile,
  PrismaneProps,
} from "@types";

export type ButtonProps<E extends Versatile = "button"> = PrismaneVersatile<
  E,
  PrismaneProps<
    {
      icon?: ReactNode;
      iconPosition?: "left" | "right";
      type?: "submit" | "reset" | "button";
      loading?: boolean;
      disabled?: boolean;
      variant?: "primary" | "secondary" | "tertiary" | "text";
      color?: PrismaneColors;
      size?: PrismaneBreakpoints;
      full?: boolean;
      shadow?: boolean;
      fillOnHover?: boolean;
    },
    TransitionProps
  >
>;
