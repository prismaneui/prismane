import { forwardRef, useState } from "react";
// Components
import Flex, { FlexProps } from "../Flex/Flex";
// Context
import { AccordionContextProvider } from "./AccordionContext";
// Types
import { PrismaneWithInternal, PrismaneProps } from "../../types";
// Utils
import { strip } from "../../utils";

// Internal Components
import AccordionControl, {
  AccordionControlProps,
} from "./AccordionControl/AccordionControl";
import AccordionIcon, {
  AccordionIconProps,
} from "./AccordionIcon/AccordionIcon";
import AccordionItem, {
  AccordionItemProps,
} from "./AccordionItem/AccordionItem";
import AccordionPanel, {
  AccordionPanelProps,
} from "./AccordionPanel/AccordionPanel";

export {
  type AccordionControlProps,
  type AccordionIconProps,
  type AccordionItemProps,
  type AccordionPanelProps,
};

export type AccordionProps = PrismaneProps<
  {
    defaultValue?: string;
  },
  FlexProps
>;

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ defaultValue = null, children, className, ...props }, ref) => {
    const [value, setValue] = useState(defaultValue);

    return (
      <Flex
        direction="column"
        w="100%"
        className={strip(
          `${className ? className : ""} PrismaneAccordion-root`
        )}
        data-testid="prismane-accordion"
        ref={ref}
        {...props}
      >
        <AccordionContextProvider value={{ value, setValue }}>
          {children}
        </AccordionContextProvider>
      </Flex>
    );
  }
) as PrismaneWithInternal<
  AccordionProps,
  {
    Control: AccordionControlProps;
    Icon: AccordionIconProps;
    Item: AccordionItemProps;
    Panel: AccordionPanelProps;
  }
>;

Accordion.Control = AccordionControl;
Accordion.Icon = AccordionIcon;
Accordion.Item = AccordionItem;
Accordion.Panel = AccordionPanel;

export default Accordion;
