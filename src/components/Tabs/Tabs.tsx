import { forwardRef, useState } from "react";
// Components
import Flex, { FlexProps } from "../Flex/Flex";
// Context
import { TabsContextProvider } from "./TabsContext";
// Types
import { PrismaneWithInternal } from "../../types";
// Utils
import { strip } from "../../utils";

// Internal Components
import TabsList, { TabsListProps } from "./TabsList/TabsList";
import TabsPanel, { TabsPanelProps } from "./TabsPanel/TabsPanel";
import TabsTab, { TabsTabProps } from "./TabsTab/TabsTab";

export { type TabsListProps, type TabsPanelProps, type TabsTabProps };

export type TabsProps = {
  variant?: "underlined" | "filled";
  defaultValue?: string;
} & FlexProps<"div">;

const Tabs: PrismaneWithInternal<
  TabsProps,
  { List: TabsListProps; Panel: TabsPanelProps; Tab: TabsTabProps }
> = forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      variant = "underlined",
      defaultValue = null,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const [value, setValue] = useState(defaultValue);

    return (
      <Flex
        direction="column"
        w="100%"
        h="100%"
        className={strip(
          `${
            className ? className : ""
          } PrismaneTabs-root-${variant} PrismaneTabs-root`
        )}
        ref={ref}
        {...props}
      >
        <TabsContextProvider value={{ variant, value, setValue }}>
          {children}
        </TabsContextProvider>
      </Flex>
    );
  }
);

Tabs.List = TabsList;
Tabs.Panel = TabsPanel;
Tabs.Tab = TabsTab;

export default Tabs;
