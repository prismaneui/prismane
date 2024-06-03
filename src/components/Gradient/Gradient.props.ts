import * as CSS from "csstype";
// Component Props
import { BoxProps } from "@components/Box";
// Types
import {
  Versatile,
  PrismaneVersatile,
  PrismaneProps,
  PrismaneColors,
  PrismaneShades,
} from "@types";

export type GradientProps<E extends Versatile = "div"> = PrismaneVersatile<
  E,
  PrismaneProps<
    {
      from?:
        | PrismaneColors
        | [PrismaneColors, PrismaneShades]
        | [PrismaneColors, PrismaneShades, number]
        | CSS.Properties["backgroundColor"];
      to?:
        | PrismaneColors
        | [PrismaneColors, PrismaneShades]
        | [PrismaneColors, PrismaneShades, number]
        | CSS.Properties["backgroundColor"];
      deg?: number;
    },
    BoxProps
  >
>;
