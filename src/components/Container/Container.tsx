import { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "../Flex/Flex";
// Types
import { PrismaneBreakpoints } from "../../types";
// Utils
import { strip } from "../../utils";

export type ContainerProps = {
  maxSize?: PrismaneBreakpoints;
} & FlexProps<"div">;

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ maxSize, children, className, ...props }, ref) => {
    return (
      <Flex
        w="100%"
        align="center"
        direction="column"
        maw={maxSize}
        grow
        className={strip(
          `${className ? className : ""} PrismaneContainer-root`
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

export default Container;
