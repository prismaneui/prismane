import { forwardRef } from "react";
// Components
import Box, { BoxProps } from "@components/Box";
// Types
import { PrismaneWithInternal } from "@/types";
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

export type TableProps = BoxProps<"table">;

const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ children, className, sx, ...props }, ref) => {
    return (
      <Box
        as="table"
        w="100%"
        sx={{
          borderCollapse: "collapse",
          ...sx,
        }}
        className={strip(`${className ? className : ""} PrismaneTable-root`)}
        data-testid="prismane-table"
        ref={ref}
        {...props}
      >
        {children}
      </Box>
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
