import { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "../../Flex/Flex";
// Utils
import { strip, variants } from "../../../utils";
// Types
import { PrismaneStyles } from "../../../types";

export type GridItemProps = {
  columnStart?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | "auto";
  columnEnd?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | "auto";
  columnSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "full";
  rowStart?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | "auto";
  rowEnd?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | "auto";
  rowSpan?: 1 | 2 | 3 | 4 | 5 | 6 | "full";
  gap?: PrismaneStyles;
} & FlexProps<"div">;

const GridItem = forwardRef<HTMLDivElement, GridItemProps>(
  (
    {
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
        className={strip(`${className ? className : ""} PrismaneGridItem-root`)}
        sx={{
          gap,
          gridColumnStart: columnStart,
          gridColumnEnd: columnEnd,
          gridColumnSpan:
            typeof columnSpan === "number"
              ? `span ${columnSpan} / span ${columnSpan}`
              : variants(columnSpan, {
                  auto: "auto",
                  full: "1 / -1",
                }),
          gridRowStart: rowStart,
          gridRowEnd: rowEnd,
          gridRowSpan:
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
