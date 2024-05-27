// Components Props
import { FlexProps } from "@/components/Flex";
// Types
import { PrismaneBreakpoints, PrismaneProps } from "@/types";

export type DividerProps = PrismaneProps<
  {
    size?: PrismaneBreakpoints;
    orientation?: "horizontal" | "vertical";
    variant?: "solid" | "dotted" | "dashed";
  },
  FlexProps
>;
