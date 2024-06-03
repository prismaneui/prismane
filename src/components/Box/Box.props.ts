// Types
import {
  PrismaneVersatile,
  PrismaneProps,
  PrismaneDefault,
  Versatile,
} from "@types";

export type BoxProps<E extends Versatile = "div"> = PrismaneVersatile<
  E,
  PrismaneProps<PrismaneDefault, React.ComponentPropsWithoutRef<E>>
>;
