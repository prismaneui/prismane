"use client";

import React, { forwardRef } from "react";
import { CaretUp } from "@phosphor-icons/react";
// Components
import Flex from "@components/Flex";
import Transition from "@components/Transition";
// Context
import { useAccordionContext } from "../AccordionContext";
import { useAccordionItemContext } from "../AccordionItem/AccordionItemContext";
// Props
import { AccordionIconProps } from "./AccordionIcon.props";
// Utils
import { cx } from "@utils";

const AccordionIcon = forwardRef<HTMLDivElement, AccordionIconProps>(
  ({ children, className, ...props }, ref) => {
    const { value }: any = useAccordionContext();

    const item: any = useAccordionItemContext();

    return (
      <Flex
        className={cx("PrismaneAccordionIcon-root", className, {
          "PrismaneAccordionIcon-root-active": value === item,
        })}
        data-testid="prismane-accordion-icon"
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
