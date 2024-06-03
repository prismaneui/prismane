import { ReactNode } from "react";
// Component Props
import { FlexProps } from "@components/Flex";
// Types
import { PrismaneProps } from "@types";

export type AccordionIconProps = PrismaneProps<
  {
    children?: ReactNode | ((active: boolean) => ReactNode);
  },
  FlexProps
>;
