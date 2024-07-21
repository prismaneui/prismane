import { forwardRef } from "react";
// Components
import Box, { BoxProps } from "@components/Box";
// Types
import { PrismaneProps, PrismaneWithInternal } from "@/types";
// Utils
import { strip, variants } from "@/utils";

// Internal Components
import GridItem, { GridItemProps } from "./GridItem";

export { type GridItemProps };

export type GridProps = PrismaneProps<
  {
    templateAreas?: string;
    templateColumns?:
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
      | "none"
      | string;
    templateRows?:
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
      | "none"
      | string;
    flow?: "row" | "column" | "dense" | "row-dense" | "column-dense";
    autoColumns?: "auto" | "min" | "max" | "fr";
    autoRows?: "auto" | "min" | "max" | "fr";
    gap?: string | number;
  },
  BoxProps
>;

const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      templateAreas,
      templateColumns,
      templateRows,
      flow,
      autoColumns,
      autoRows,
      gap,
      children,
      className,
      sx,
      ...props
    },
    ref
  ) => {
    return (
      <Box
        className={strip(`${className ? className : ""} PrismaneGrid-root`)}
        dp="grid"
        sx={{
          gap: gap,
          gridTemplateAreas: templateAreas,
          gridTemplateColumns:
            typeof templateColumns === "number"
              ? `repeat(${templateColumns}, minmax(0, 1fr))`
              : templateColumns,
          gridTemplateRows:
            typeof templateRows === "number"
              ? `repeat(${templateRows}, minmax(0, 1fr))`
              : templateRows,
          gridAutoFlow: variants(flow, {
            row: "row",
            column: "column",
            dense: "dense",
            "row-dense": "row dense",
            "column-dense": "column dense",
          }),
          gridAutoColumns: variants(autoColumns, {
            auto: "auto",
            min: "min-content",
            max: "max-content",
            fr: "minmax(0, 1fr)",
          }),
          gridAutoRows: variants(autoRows, {
            auto: "auto",
            min: "min-content",
            max: "max-content",
            fr: "minmax(0, 1fr)",
          }),
          ...sx,
        }}
        data-testid="prismane-grid"
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
) as PrismaneWithInternal<GridProps, { Item: GridItemProps }>;

Grid.Item = GridItem;

export default Grid;
