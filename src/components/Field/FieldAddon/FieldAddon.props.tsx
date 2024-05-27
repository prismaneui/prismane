// Component Props
import { FlexProps } from "@components/Flex";
import { TransitionProps } from "@components/Transition";
// Types
import { PrismaneBreakpoints, PrismaneProps } from "@types";

export type FieldAddonProps = PrismaneProps<
  {
    size?: PrismaneBreakpoints;
    position?: "right" | "left";
  },
  TransitionProps & FlexProps
>;
