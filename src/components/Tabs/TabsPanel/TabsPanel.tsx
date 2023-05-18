import { forwardRef, useState } from "react";
// Components
import Flex, { FlexProps } from "../../Flex/Flex";
// Context
import { useTabsContext } from "../TabsContext";
// Utils
import { strip, fr } from "../../../utils";

export type TabsPanelProps = { value: string } & FlexProps<"div">;

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
            className={strip(
              `${className ? className : ""} PrismaneTabsPanel-root`
            )}
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
