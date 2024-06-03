"use client";

import React, { forwardRef } from "react";
// Components
import Flex from "@components/Flex";
import Transition from "@components/Transition";
// Context
import { useTabsContext } from "../TabsContext";
// Utils
import { cx, variants, fr } from "@utils";
// Props
import { TabsTabProps } from "./TabsTab.props";

const TabsTab = forwardRef<HTMLDivElement, TabsTabProps>(
  ({ value, disabled, children, className, ...props }, ref) => {
    const tabs = useTabsContext();

    return (
      <Transition
        as={Flex}
        w="fit-content"
        py={fr(1.5)}
        px={fr(4)}
        pe={disabled ? "none" : "all"}
        op={disabled ? 0.4 : 1}
        br={tabs.variant === "filled" ? "base" : undefined}
        bdbw={tabs.variant === "underlined" ? 2 : undefined}
        bdc={(theme) =>
          tabs.value === value
            ? ["primary", 500]
            : theme.mode === "dark"
            ? ["base", 700]
            : ["base", 200]
        }
        cl={(theme) =>
          variants(tabs.variant, {
            underlined: theme.mode === "dark" ? ["base", 200] : ["base", 700],
            filled:
              tabs.value === value
                ? "white"
                : theme.mode === "dark"
                ? ["base", 200]
                : ["base", 700],
          })
        }
        bg={(theme) =>
          variants(tabs.variant, {
            underlined:
              theme.mode === "dark"
                ? ["transparent", { hover: ["base", 700, 0.2] }]
                : ["transparent", { hover: ["base", 500, 0.1] }],
            filled:
              tabs.value === value
                ? ["primary", 500]
                : theme.mode === "dark"
                ? ["transparent", { hover: ["base", 700, 0.2] }]
                : ["transparent", { hover: ["base", 500, 0.1] }],
          })
        }
        cs="pointer"
        onClick={() => {
          tabs.setValue(value);
        }}
        className={cx("PrismaneTabsTab-root", className)}
        data-testid="prismane-tabs-tab"
        ref={ref}
        {...props}
      >
        {children}
      </Transition>
    );
  }
);

export default TabsTab;
