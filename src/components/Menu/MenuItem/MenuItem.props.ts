// Component Props
import { FlexProps } from "@components/Flex";
import { TransitionProps } from "@components/Transition";
// Types
import { PrismaneColors, PrismaneProps } from "@types";

export type MenuItemProps = PrismaneProps<
  {
    color?: PrismaneColors;
  },
  TransitionProps & FlexProps
>;
