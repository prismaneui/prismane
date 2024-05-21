"use client";

import React, { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "@components/Flex";
// Context
import { useTabsContext } from "../TabsContext";
// Types
import { PrismaneProps } from "@types";
// Utils
import { cx } from "@utils";

export type TabsPanelProps = PrismaneProps<{ value: string }, FlexProps>;

const TabsPanel = forwardRef<HTMLDivElement, TabsPanelProps>(
  ({ value, children, className, ...props }, ref) => {
    const tabs = useTabsContext();

    return (
      <>
        {tabs.value === value && (
          <Flex
            w="100%"
            h="100%"
            grow
            className={cx("PrismaneTabsPanel-root", className)}
            data-testid="prismane-tabs-panel"
            ref={ref}
            {...props}
          >
            {children}
          </Flex>
        )}
      </>
    );
  }
);

export default TabsPanel;
