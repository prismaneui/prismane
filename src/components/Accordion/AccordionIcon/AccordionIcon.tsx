"use client";

import React, { ReactNode, forwardRef } from "react";
import { CaretUp } from "@phosphor-icons/react";
// Components
import Flex, { FlexProps } from "@components/Flex";
import Transition from "@components/Transition";
// Context
import { useAccordionContext } from "../AccordionContext";
import { useAccordionItemContext } from "../AccordionItem/AccordionItemContext";
// Types
import { PrismaneProps } from "@types";
// Utils
import { cx } from "@utils";

export type AccordionIconProps = PrismaneProps<
  {
    children?: ReactNode | ((active: boolean) => ReactNode);
  },
  FlexProps
>;

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
