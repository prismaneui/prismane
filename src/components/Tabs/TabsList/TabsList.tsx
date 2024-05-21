"use client";

import React, { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "@components/Flex";
// Context
import { useTabsContext } from "../TabsContext";
// Utils
import { strip, fr } from "@utils";

export type TabsListProps = FlexProps;

const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ children, className, ...props }, ref) => {
    const tabs = useTabsContext();

    return (
      <Flex
        w="100%"
        pos="relative"
        className={strip(`${className ? className : ""} PrismaneTabsList-root`)}
        data-testid="prismane-tabs-list"
        ref={ref}
        {...props}
      >
        <Flex gap={tabs.variant === "filled" ? fr(2) : undefined} z={200}>
          {children}
        </Flex>
        {tabs.variant === "underlined" && (
          <Flex
            h={2}
            w="100%"
            pos="absolute"
            b={0}
            l={0}
            bg={(theme) =>
              theme.mode === "dark" ? ["base", 700] : ["base", 200]
            }
          ></Flex>
        )}
      </Flex>
    );
  }
);

export default TabsList;
