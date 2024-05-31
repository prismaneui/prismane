// Components Props
import { BoxProps } from "@components/Box";
// Types
import { Versatile, PrismaneVersatile } from "@types";

export type TextProps<E extends Versatile = "span"> = PrismaneVersatile<
  E,
  BoxProps
>;
