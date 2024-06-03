// Component Props
import { FlexProps } from "@components/Flex";
// Types
import { PrismaneProps } from "@types";

export type AccordionItemProps = PrismaneProps<
  {
    value?: string | null;
  },
  FlexProps
>;
