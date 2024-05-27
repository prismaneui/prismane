import { ReactNode } from "react";
// Components
import { CenterProps } from "@components/Center";
// Types
import {
  PrismaneColors,
  PrismanePositions,
  PrismaneBreakpoints,
  Versatile,
  PrismaneVersatile,
  PrismaneProps,
} from "@types";

export type BadgeProps<E extends Versatile = "div"> = PrismaneVersatile<
  E,
  PrismaneProps<
    {
      label?: ReactNode;
      position?: PrismanePositions;
      color?: PrismaneColors;
      size?: PrismaneBreakpoints;
    },
    CenterProps
  >
>;
