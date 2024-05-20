"use client";

import { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "@components/Flex";
import Transition, { TransitionProps } from "@components/Transition";
// Context
import { useAccordionContext } from "../AccordionContext";
import { useAccordionItemContext } from "../AccordionItem/AccordionItemContext";
// Types
import { PrismaneProps } from "@types";
// Utils
import { strip, fr } from "@/utils";

export type AccordionControlProps = PrismaneProps<FlexProps, TransitionProps>;

const AccordionControl = forwardRef<HTMLDivElement, AccordionControlProps>(
  ({ children, className, ...props }, ref) => {
    const { value, setValue }: any = useAccordionContext();

    const item: any = useAccordionItemContext();

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
          `${className ? className : ""} ${
            value === item ? "PrismaneAccordionControl-root-active" : ""
          } PrismaneAccordionControl-root`
        )}
        data-testid="prismane-accordion-control"
        ref={ref}
        {...props}
      >
        {children}
      </Transition>
    );
  }
);

export default AccordionControl;
