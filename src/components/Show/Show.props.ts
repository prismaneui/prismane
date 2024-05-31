// Components Props
import { BoxProps } from "@components/Box";
// Types
import { PrismaneBreakpoints, PrismaneProps } from "@types";

export type ShowProps = PrismaneProps<
  {
    breakpoint?: PrismaneBreakpoints | string;
  },
  BoxProps
>;
