import { ReactNode } from "react";
// Component Props
import { FlexProps } from "@/components/Flex";
import { TransitionProps } from "@/components/Transition";
// Types
import { PrismaneBreakpoints, PrismaneColors, PrismaneProps } from "@/types";

export type ChipProps = PrismaneProps<
  {
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    color?: PrismaneColors;
    size?: PrismaneBreakpoints;
  },
  FlexProps & TransitionProps
>;
