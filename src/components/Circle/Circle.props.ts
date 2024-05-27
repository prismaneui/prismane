// Component Props
import { CenterProps } from "@/components/Center";
// Types
import {
  PrismaneProps,
  PrismaneStyles,
  PrismaneVersatile,
  Versatile,
} from "@/types";

export type CircleProps<E extends Versatile = "div"> = PrismaneVersatile<
  E,
  PrismaneProps<
    {
      size: PrismaneStyles;
    },
    CenterProps
  >
>;
