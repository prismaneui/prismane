import { forwardRef, useState } from "react";
// Components
import Flex, { FlexProps } from "../Flex/Flex";
// Context
import { AccordionContextProvider } from "./AccordionContext";
// Utils
import { strip } from "../../utils";

export type AccordionProps = {
  defaultValue?: string;
} & FlexProps<"div">;

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
        ref={ref}
        {...props}
      >
        <AccordionContextProvider value={{ value, setValue }}>
          {children}
        </AccordionContextProvider>
      </Flex>
    );
  }
);

export default Accordion;
