// Components
import { AnimationProps } from "@components/Animation";
// Types
import { PrismaneProps } from "@types";

export type CollapseProps = PrismaneProps<
  {
    open?: boolean;
  },
  AnimationProps
>;
