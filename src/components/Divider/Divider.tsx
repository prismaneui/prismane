"use client";

import React, { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "@components/Flex";
// Types
import { PrismaneProps, PrismaneBreakpoints } from "@types";
// Utils
import { strip, variants } from "@utils";

export type DividerProps = PrismaneProps<
  {
    size?: PrismaneBreakpoints;
    orientation?: "horizontal" | "vertical";
    variant?: "solid" | "dotted" | "dashed";
  },
  FlexProps
>;

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
        data-testid="prismane-divider"
        ref={ref}
        {...props}
      ></Flex>
    );
  }
);

export default Divider;
