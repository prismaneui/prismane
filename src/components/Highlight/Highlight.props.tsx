// Components
import { BoxProps } from "@components/Box";
// Types
import { Versatile, PrismaneVersatile } from "@types";

export type HighlightProps<E extends Versatile = "mark"> = PrismaneVersatile<
  E,
  BoxProps
>;
