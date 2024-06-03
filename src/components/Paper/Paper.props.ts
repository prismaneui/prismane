// Component Props
import { FlexProps } from "@components/Flex";
// Types
import { Versatile, PrismaneVersatile, PrismaneProps } from "@types";

export type PaperProps<E extends Versatile = "div"> = PrismaneVersatile<
  E,
  PrismaneProps<
    {
      shadow?: boolean;
    },
    FlexProps
  >
>;
