import * as CSS from "csstype";
// Components
import { FlexProps } from "@components/Flex";
import { TransitionProps } from "@components/Transition";
// Types
import {
  PrismaneBreakpoints,
  PrismaneProps,
  PrismaneColors,
  PrismaneShades,
} from "@types";

export type ProgressProps = PrismaneProps<
  {
    value: number;
    size?: string | number | PrismaneBreakpoints;
    color?:
      | PrismaneColors
      | [PrismaneColors, PrismaneShades]
      | [PrismaneColors, PrismaneShades, number]
      | CSS.Properties["color"];
  },
  FlexProps & TransitionProps
>;
