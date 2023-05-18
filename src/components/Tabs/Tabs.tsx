import { forwardRef, useState } from "react";
// Components
import Flex, { FlexProps } from "../Flex/Flex";
// Context
import { TabsContextProvider } from "./TabsContext";
// Utils
import { strip } from "../../utils";

export type TabsProps = {
  variant?: "underlined" | "filled";
  defaultValue?: string;
} & FlexProps<"div">;

const Tabs = forwardRef<HTMLDivElement, TabsProps>(
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
        className={strip(`${className ? className : ""} PrismaneTabs-root`)}
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

export default Tabs;
