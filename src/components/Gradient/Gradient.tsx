"use client";

import React, { forwardRef } from "react";
// Component
import Box from "@components/Box";
// Hooks
import usePrismaneColor from "@components/PrismaneProvider/usePrismaneColor";
// Types
import {
  Versatile,
  PrismaneVersatileRef,
  
} from "@types";
// Utils
import { cx } from "@utils";
// Props
import { GradientProps } from "./Gradient.props";

type GradientComponent = <E extends Versatile = "div">(
  props: GradientProps<E>
) => any;

const Gradient: GradientComponent = forwardRef(
  <E extends Versatile = "div">(
    {
      from = ["primary", 500],
      to = ["primary", 300],
      deg = 90,
      as,
      children,
      className,
      sx,
      ...props
    }: GradientProps<E>,
    ref: PrismaneVersatileRef<E>
  ) => {
    const { getColorStyle } = usePrismaneColor();

    const Component = as || "div";

    return (
      <Box
        as={Component}
        className={cx("PrismaneGradient-root", className)}
        bg="transparent"
        sx={{
          background: `linear-gradient(${deg}deg, ${getColorStyle(
            from
          )}, ${getColorStyle(to)})`,
          ...sx,
        }}
        data-testid="prismane-gradient"
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

export default Gradient;
