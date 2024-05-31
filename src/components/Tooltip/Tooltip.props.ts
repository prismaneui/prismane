import { ReactNode } from "react";
// Components Props
import { AnimationProps } from "@components/Animation";
import { FlexProps } from "@components/Flex";
// Types
import {
  PrismanePositions,
  PrismaneBreakpoints,
  PrismaneColors,
  PrismaneProps,
} from "@types";

export type TooltipProps = PrismaneProps<
  {
    label?: ReactNode;
    position?: PrismanePositions;
    size?: PrismaneBreakpoints;
    color?: PrismaneColors;
  },
  AnimationProps & FlexProps
>;
