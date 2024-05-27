"use client";

import React, { forwardRef } from "react";
// Components
import Flex from "@components/Flex";
// Context
import { AccordionItemContextProvider } from "./AccordionItemContext";
// Props
import { AccordionItemProps } from "./AccordionItem.props";
// Utils
import { cx } from "@utils";

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ value = null, children, className, ...props }, ref) => {
    return (
      <Flex
        direction="column"
        grow
        bdbw={1}
        bdbc={(theme) =>
          theme.mode === "dark" ? ["base", 700] : ["base", 200]
        }
        cl={(theme) => (theme.mode === "dark" ? ["base", 200] : ["base", 700])}
        className={cx("PrismaneAccordionItem-root", className)}
        data-testid="prismane-accordion-item"
        ref={ref}
        {...props}
      >
        <AccordionItemContextProvider value={value}>
          {children}
        </AccordionItemContextProvider>
      </Flex>
    );
  }
);

export default AccordionItem;
