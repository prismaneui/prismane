// Components Props
import { TransitionProps } from "@components/Transition";
// Types
import {
  PrismaneAnimations,
  Versatile,
  PrismaneVersatile,
  PrismaneProps,
} from "@types";

export type AnimationProps<E extends Versatile = "div"> = PrismaneVersatile<
  E,
  PrismaneProps<
    {
      animation?: PrismaneAnimations | Animation;
      animated?: boolean;
    },
    TransitionProps
  >
>;
