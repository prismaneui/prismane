// Component Props
import { BoxProps } from "@components/Box";
// Types
import { PrismaneProps } from "@types";

export type TableCaptionProps = PrismaneProps<
  {
    placement?: "bottom" | "top";
  },
  BoxProps<"caption">
>;
