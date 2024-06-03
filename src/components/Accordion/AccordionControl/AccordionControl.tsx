"use client";

import React, { forwardRef } from "react";
// Components
import Flex from "@components/Flex";
import Transition from "@components/Transition";
// Context
import { useAccordionContext } from "../AccordionContext";
import { useAccordionItemContext } from "../AccordionItem/AccordionItemContext";
// Props
import { AccordionControlProps } from "./AccordionControl.props";
// Utils
import { cx, fr } from "@utils";

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
        className={cx("PrismaneAccordionControl-root", className, {
          "PrismaneAccordionControl-root-active": value === item,
        })}
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
