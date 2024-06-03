// Component Props
import { FlexProps } from "@components/Flex";
// Types
import { PrismaneBreakpoints, PrismaneProps } from "@types";

export type ContainerProps = PrismaneProps<
  {
    maxSize?:
      | PrismaneBreakpoints
      | "xl"
      | "2xl"
      | "3xl"
      | "4xl"
      | "5xl"
      | "6xl"
      | string;
  },
  FlexProps
>;
