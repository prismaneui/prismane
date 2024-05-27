// Components Props
import { CenterProps } from "@components/Center";
// Types
import {
  PrismaneStyles,
  Versatile,
  PrismaneVersatile,
  PrismaneProps,
} from "@types";

export type SquareProps<E extends Versatile = "div"> = PrismaneVersatile<
  E,
  PrismaneProps<
    {
      size: PrismaneStyles;
    },
    CenterProps
  >
>;
