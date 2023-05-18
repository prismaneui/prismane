import { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "../Flex/Flex";
// Utils
import { strip } from "../../utils";

export type DividerProps = FlexProps<"div">;

const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ className, ...props }, ref) => {
    return (
      <Flex
        h={1}
        bg={(theme) => (theme.mode === "dark" ? ["base", 700] : ["base", 300])}
        className={strip(`${className ? className : ""} PrismaneDivider-root`)}
        ref={ref}
        {...props}
      ></Flex>
    );
  }
);

export default Divider;
