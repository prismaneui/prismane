"use client";

import React, { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "@components/Flex";
// Types
import { PrismaneProps } from "@types";
// Utils
import { cx, variants } from "@utils";

export type GridItemProps = PrismaneProps<
  {
    area?: string;
    columnStart?:
      | 1
      | 2
      | 3
      | 4
      | 5
      | 6
      | 7
      | 8
      | 9
      | 10
      | 11
      | 12
      | 13
      | "auto";
    columnEnd?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | "auto";
    columnSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "full";
    rowStart?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | "auto";
    rowEnd?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | "auto";
    rowSpan?: 1 | 2 | 3 | 4 | 5 | 6 | "full";
  },
  FlexProps
>;

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
