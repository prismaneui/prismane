"use client";

import React, { forwardRef } from "react";
// Components
import Box from "@components/Box";
// Types
import {
  Versatile,
  PrismaneVersatileRef,
} from "@types";
// Utils
import { cx, variants } from "@utils";
// Props
import { FlexProps } from "./Flex.props";

type FlexComponent = <E extends Versatile = "div">(props: FlexProps<E>) => any;

const Flex: FlexComponent = forwardRef(
  <E extends Versatile = "div">(
    {
      as,
      justify,
      align,
      gap,
      direction,
      self,
      basis,
      grow,
      shrink,
      wrap,
      children,
      className,
      sx,
      ...props
    }: FlexProps<E>,
    ref: PrismaneVersatileRef<E>
  ) => {
    const Component = as || "div";

    return (
      <Box
        as={Component}
        dp="flex"
        sx={{
          justifyContent: variants(justify, {
            start: "flex-start",
            end: "flex-end",
            center: "center",
            between: "space-between",
            around: "space-around",
            evenly: "space-evenly",
          }),
          alignItems: variants(align, {
            start: "flex-start",
            end: "flex-end",
            center: "center",
            baseline: "baseline",
            stretch: "stretch",
          }),
          flexDirection: variants(direction, {
            row: "row",
            "row-reverse": "row-reverse",
            column: "column",
            "column-reverse": "column-reverse",
          }),
          alignSelf: variants(self, {
            auto: "auto",
            start: "flex-start",
            end: "flex-end",
            center: "center",
            stretch: "stretch",
            baseline: "baseline",
          }),
          flexWrap: variants(wrap, {
            nowrap: "nowrap",
            wrap: "wrap",
            "wrap-reverse": "wrap-reverse",
          }),
          flexGrow: grow && 1,
          flexShrink: shrink && 1,
          flexBasis: basis,
          gap: gap,
          ...sx,
        }}
        className={cx("PrismaneFlex-root", className)}
        data-testid="prismane-flex"
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

export default Flex;
