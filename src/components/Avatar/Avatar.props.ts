// Component Props
import { CircleProps } from "@components/Circle";
// Types
import {
  PrismaneColors,
  PrismaneBreakpoints,
  Versatile,
  PrismaneVersatile,
  PrismaneProps,
} from "@types";

export type AvatarProps<E extends Versatile = "div"> = PrismaneVersatile<
  E,
  PrismaneProps<
    {
      src?: string;
      srcSet?: string;
      alt?: string;
      sizes?: string;
      color?: PrismaneColors;
      size?: PrismaneBreakpoints;
    },
    CircleProps
  >
>;
