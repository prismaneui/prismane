// Component Props
import { FlexProps } from "@components/Flex";
// Types
import { Versatile, PrismaneVersatile } from "@types";

export type CenterProps<E extends Versatile = "div"> = PrismaneVersatile<
  E,
  FlexProps
>;
