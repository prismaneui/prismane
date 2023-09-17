import { forwardRef, useState } from "react";
// Components
import Flex, { FlexProps } from "../../Flex/Flex";
import Transition, { TransitionProps } from "../../Transition/Transition";
// Context
import { useTabsContext } from "../TabsContext";
// Types
import { PrismaneProps } from "../../../types";
// Utils
import { strip, variants, fr } from "../../../utils";

export type TabsTabProps = PrismaneProps<
  { value: string },
  FlexProps & TransitionProps
>;

const TabsTab = forwardRef<HTMLDivElement, TabsTabProps>(
  ({ value, children, className, ...props }, ref) => {
    const tabs = useTabsContext();

    return (
      <Transition
        as={Flex}
        w="fit-content"
        py={fr(1.5)}
        px={fr(4)}
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
                : ["transparent", { hover: ["base", 500, 0.15] }],
            filled:
              tabs.value === value
                ? ["primary", 500]
                : theme.mode === "dark"
                ? ["transparent", { hover: ["base", 700, 0.2] }]
                : ["transparent", { hover: ["base", 500, 0.15] }],
          })
        }
        cs="pointer"
        onClick={() => {
          tabs.setValue(value);
        }}
        className={strip(`${className ? className : ""} PrismaneTabsTab-root`)}
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
