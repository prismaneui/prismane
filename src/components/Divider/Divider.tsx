import { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "../Flex/Flex";
// Utils
import { strip, variants } from "../../utils";
import { PrismaneBreakpoints } from "../../types";

export type DividerProps = {
  size?: PrismaneBreakpoints;
  orientation?: "horizontal" | "vertical";
  variant?: "solid" | "dotted" | "dashed";
} & FlexProps<"div">;

const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      size = "xs",
      orientation = "horizontal",
      variant = "solid",
      className,
      ...props
    },
    ref
  ) => {
    return (
      <Flex
        as="hr"
        h={variants(orientation, {
          horizontal: 1,
          vertical: "100%",
        })}
        mah={variants(orientation, {
          horizontal: 1,
          vertical: "100%",
        })}
        w={variants(orientation, {
          horizontal: "100%",
          vertical: 1,
        })}
        maw={variants(orientation, {
          horizontal: "100%",
          vertical: 1,
        })}
        bds={variant}
        bdbw={
          orientation === "horizontal" &&
          variants(size, {
            xs: 1,
            sm: 2,
            base: 3,
            md: 4,
            lg: 5,
          })
        }
        bdlw={
          orientation === "vertical" &&
          variants(size, {
            xs: 1,
            sm: 2,
            base: 3,
            md: 4,
            lg: 5,
          })
        }
        bs="border-box"
        bdc={(theme) => (theme.mode === "dark" ? ["base", 700] : ["base", 300])}
        className={strip(`${className ? className : ""} PrismaneDivider-root`)}
        grow
        ref={ref}
        {...props}
      ></Flex>
    );
  }
);

export default Divider;
