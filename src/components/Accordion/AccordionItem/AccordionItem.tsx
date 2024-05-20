"use client";

import React, { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "@components/Flex";
// Context
import { AccordionItemContextProvider } from "./AccordionItemContext";
// Types
import { PrismaneProps } from "@types";
// Utils
import { strip } from "@/utils";

export type AccordionItemProps = PrismaneProps<
  {
    value?: string | null;
  },
  FlexProps
>;

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
        className={strip(
          `${className ? className : ""} PrismaneAccordionItem-root`
        )}
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
