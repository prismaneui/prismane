import { forwardRef } from "react";
import { CaretUp, CaretDown } from "@phosphor-icons/react";
// Components
import Flex, { FlexProps } from "../../Flex/Flex";
import Transition from "../../Transition/Transition";
// Context
import { useAccordionContext } from "../AccordionContext";
import { useAccordionItemContext } from "../AccordionItem/AccordionItemContext";
// Utils
import { strip } from "../../../utils";

export type AccordionIconProps = FlexProps<"div">;

const AccordionIcon = forwardRef<HTMLDivElement, AccordionIconProps>(
  ({ children, className, ...props }, ref) => {
    const { value } = useAccordionContext();

    const item = useAccordionItemContext();

    return (
      <Flex
        className={strip(
          `${className ? className : ""} PrismaneAccordionIcon-root`
        )}
        ref={ref}
        {...props}
      >
        {children ? (
          typeof children === "function" ? (
            children(value === item)
          ) : (
            children
          )
        ) : (
          <Transition
            as={CaretUp}
            sx={{
              transform: value === item ? "rotate(0deg)" : "rotate(-180deg)",
            }}
          />
        )}
      </Flex>
    );
  }
);

export default AccordionIcon;
