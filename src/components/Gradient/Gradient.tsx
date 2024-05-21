"use client";

import React, { forwardRef } from "react";
import * as CSS from "csstype";
// Component
import Box, { BoxProps } from "@components/Box";
// Hooks
import usePrismaneColor from "@components/PrismaneProvider/usePrismaneColor";
// Types
import {
  Versatile,
  PrismaneVersatile,
  PrismaneVersatileRef,
  PrismaneProps,
  PrismaneColors,
  PrismaneShades,
} from "@types";
// Utils
import { strip } from "@utils";

export type GradientProps<E extends Versatile = "div"> = PrismaneVersatile<
  E,
  PrismaneProps<
    {
      from?:
        | PrismaneColors
        | [PrismaneColors, PrismaneShades]
        | [PrismaneColors, PrismaneShades, number]
        | CSS.Properties["backgroundColor"];
      to?:
        | PrismaneColors
        | [PrismaneColors, PrismaneShades]
        | [PrismaneColors, PrismaneShades, number]
        | CSS.Properties["backgroundColor"];
      deg?: number;
    },
    BoxProps
  >
>;

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
        className={strip(`${className ? className : ""} PrismaneGradient-root`)}
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
