// Component Props
import { SquareProps } from "@components/Square";
// Types
import { PrismaneBreakpoints, PrismaneProps } from "@types";

export type IconProps = PrismaneProps<
  {
    size?: string | number | PrismaneBreakpoints;
  },
  SquareProps
>;
