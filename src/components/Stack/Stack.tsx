import { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "../Flex/Flex";
// Types
import { PrismaneStyles, PrismaneComponent } from "../../types";
// Utils
import { strip } from "../../utils";

export type StackProps = FlexProps<"div">;

const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ gap = 1, direction = "row", children, className, ...props }, ref) => {
    return (
      <Flex
        direction={direction}
        gap={gap}
        className={strip(`${className ? className : ""} PrismaneStack-root`)}
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

export default Stack;
