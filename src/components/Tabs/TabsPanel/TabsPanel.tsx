"use client";

import React, { forwardRef } from "react";
// Components
import Flex from "@components/Flex";
// Context
import { useTabsContext } from "../TabsContext";
// Utils
import { cx } from "@utils";
// Props
import { TabsPanelProps } from "./TabsPanel.props";

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
