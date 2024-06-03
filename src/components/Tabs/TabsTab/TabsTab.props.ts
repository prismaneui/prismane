// Component Props
import { FlexProps } from "@components/Flex";
import { TransitionProps } from "@components/Transition";
// Types
import { PrismaneProps } from "@types";

export type TabsTabProps = PrismaneProps<
  { value: string; disabled?: boolean },
  FlexProps & TransitionProps
>;
