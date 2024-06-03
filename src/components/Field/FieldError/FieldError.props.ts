// Component Props
import { AnimationProps } from "@components/Animation";
import { FlexProps } from "@components/Flex";
// Types
import { PrismaneBreakpoints, PrismaneProps } from "@types";

export type FieldErrorProps = PrismaneProps<
  {
    size?: PrismaneBreakpoints;
  },
  AnimationProps & FlexProps
>;
