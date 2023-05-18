import { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "../../Flex/Flex";
// Utils
import { strip } from "../../../utils";

export type BreadcrumbSeparatorProps = FlexProps<"div">;

const BreadcrumbSeparator = forwardRef<
  HTMLDivElement,
  BreadcrumbSeparatorProps
>(({ children = "/", className, ...props }, ref) => {
  return (
    <Flex
      align="center"
      justify="center"
      cl={(theme) => (theme.mode === "dark" ? ["base", 700] : ["base", 300])}
      className={strip(
        `${className ? className : ""} PrismaneBreadcrumbSeparator-root`
      )}
      ref={ref}
      {...props}
    >
      {children}
    </Flex>
  );
});

export default BreadcrumbSeparator;
