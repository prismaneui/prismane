import { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "../../Flex/Flex";
import Transition, { TransitionProps } from "../../Transition/Transition";
// Context
import { useAccordionContext } from "../AccordionContext";
import { useAccordionItemContext } from "../AccordionItem/AccordionItemContext";
// Utils
import { strip, fr } from "../../../utils";

export type AccordionControlProps = FlexProps<"div"> & TransitionProps<"div">;

const AccordionControl = forwardRef<HTMLDivElement, AccordionControlProps>(
  ({ children, className, ...props }, ref) => {
    const { value, setValue } = useAccordionContext();

    const item = useAccordionItemContext();

    return (
      <Transition
        as={Flex}
        justify="between"
        align="center"
        grow
        px={fr(6)}
        py={fr(2)}
        cs="pointer"
        bg={(theme) =>
          theme.mode === "dark"
            ? ["transparent", { hover: ["base", 700, 0.2] }]
            : ["transparent", { hover: ["base", 500, 0.1] }]
        }
        onClick={() => {
          value === item ? setValue(null) : setValue(item);
        }}
        className={strip(
          `${className ? className : ""} PrismaneAccordionControl-root`
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Transition>
    );
  }
);

export default AccordionControl;
