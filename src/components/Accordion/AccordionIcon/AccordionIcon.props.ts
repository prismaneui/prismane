import { ReactNode } from "react";
// Components
import { FlexProps } from "@components/Flex";
// Types
import { PrismaneProps } from "@types";

export type AccordionIconProps = PrismaneProps<
  {
    children?: ReactNode | ((active: boolean) => ReactNode);
  },
  FlexProps
>;
