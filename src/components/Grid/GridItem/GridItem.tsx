"use client";

import React, { forwardRef } from "react";
// Components
import Flex from "@components/Flex";
// Utils
import { cx, variants } from "@utils";
// Props
import { GridItemProps } from "./GridItem.props";

const GridItem = forwardRef<HTMLDivElement, GridItemProps>(
  (
    {
      area,
      columnStart,
      columnEnd,
      columnSpan,
      rowStart,
      rowEnd,
      rowSpan,
      gap,
      children,
      className,
      sx,
      ...props
    },
    ref
  ) => {
    return (
      <Flex
        dp="grid"
        className={cx("PrismaneGridItem-root", className)}
        sx={{
          gap,
          gridArea: area,
          gridColumnStart: columnStart,
          gridColumnEnd: columnEnd,
          gridColumn:
            typeof columnSpan === "number"
              ? `span ${columnSpan} / span ${columnSpan}`
              : variants(columnSpan, {
                  auto: "auto",
                  full: "1 / -1",
                }),
          gridRowStart: rowStart,
          gridRowEnd: rowEnd,
          gridRow:
            typeof rowSpan === "number"
              ? `span ${rowSpan} / span ${rowSpan}`
              : variants(rowSpan, {
                  auto: "auto",
                  full: "1 / -1",
                }),
          ...sx,
        }}
        data-testid="prismane-grid-item"
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

export default GridItem;
