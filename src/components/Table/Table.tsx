import React, { forwardRef } from "react";
// Components
import Box, { BoxProps } from "@components/Box";
// Context
import { TableContextProvider } from "./TableContext";
// Types
import {
  PrismaneWithInternal,
  PrismaneProps,
  PrismaneBreakpoints,
} from "@types";
// Utils
import { strip } from "@/utils";

// Internal Components
import TableRow, { TableRowProps } from "./TableRow";
import TableHead, { TableHeadProps } from "./TableHead";
import TableFoot, { TableFootProps } from "./TableFoot";
import TableCell, { TableCellProps } from "./TableCell";
import TableBody, { TableBodyProps } from "./TableBody";
import TableCaption, { TableCaptionProps } from "./TableCaption";

export {
  type TableRowProps,
  type TableHeadProps,
  type TableFootProps,
  type TableCellProps,
  type TableBodyProps,
  type TableCaptionProps,
};

export type TableProps = PrismaneProps<
  {
    lines?: "vertical" | "horizontal" | "both" | "none";
    striped?: boolean;
    bordered?: boolean;
    size?: PrismaneBreakpoints;
  },
  BoxProps<"table">
>;

const Table = forwardRef<HTMLTableElement, TableProps>(
  (
    {
      lines = "horizontal",
      striped = false,
      bordered = false,
      size = "base",
      children,
      className,
      sx,
      ...props
    },
    ref
  ) => {
    return (
      <TableContextProvider
        value={{
          lines,
          striped,
          size,
        }}
      >
        <Box
          as="table"
          w="100%"
          bdc={(theme) =>
            theme.mode === "dark" ? ["base", 700] : ["base", 300]
          }
          sx={{
            borderCollapse: "collapse",
            borderWidth: bordered ? 1 : 0,
            "& .PrismaneTableCell-root:not(:first-child)": {
              borderLeftWidth: (lines === "vertical" || lines === "both") && 1,
            },
            ...sx,
          }}
          className={strip(`${className ? className : ""} PrismaneTable-root`)}
          data-testid="prismane-table"
          ref={ref}
          {...props}
        >
          {children}
        </Box>
      </TableContextProvider>
    );
  }
) as PrismaneWithInternal<
  TableProps,
  {
    Row: TableRowProps;
    Head: TableHeadProps;
    Foot: TableFootProps;
    Cell: TableCellProps;
    Body: TableBodyProps;
    Caption: TableCaptionProps;
  }
>;

Table.Row = TableRow;
Table.Head = TableHead;
Table.Foot = TableFoot;
Table.Cell = TableCell;
Table.Body = TableBody;
Table.Caption = TableCaption;

export default Table;
