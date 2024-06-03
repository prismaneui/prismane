// Component Props
import { BoxProps } from "@components/Box";
// Types
import {
  PrismaneTransitions,
  Versatile,
  PrismaneVersatile,
  PrismaneProps,
} from "@types";

export type TransitionProps<E extends Versatile = "div"> = PrismaneVersatile<
  E,
  PrismaneProps<
    {
      transition?: PrismaneTransitions | string;
      duration?: number;
      delay?: number;
      timing?: string;
    },
    BoxProps
  >
>;
