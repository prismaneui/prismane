// Components Props
import { BoxProps } from "@/components/Box";
// Types
import { PrismaneBreakpoints, PrismaneProps } from "@/types";

export type HideProps = PrismaneProps<
  {
    breakpoint?: PrismaneBreakpoints | string;
  },
  BoxProps
>;
