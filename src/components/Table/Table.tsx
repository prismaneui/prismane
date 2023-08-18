import { forwardRef } from "react";
// Components
import Box, { BoxProps } from "../Box/Box";
// Types
import { PrismaneWithInternal, PrismaneVersatileWithoutAs } from "../../types";
// Utils
import { strip } from "../../utils";

// Internal Components
import TableRow, { TableRowProps } from "./TableRow/TableRow";
import TableHead, { TableHeadProps } from "./TableHead/TableHead";
import TableFoot, { TableFootProps } from "./TableFoot/TableFoot";
import TableCell, { TableCellProps } from "./TableCell/TableCell";
import TableBody, { TableBodyProps } from "./TableBody/TableBody";
import TableCaption, { TableCaptionProps } from "./TableCaption/TableCaption";

export {
  type TableRowProps,
  type TableHeadProps,
  type TableFootProps,
  type TableCellProps,
  type TableBodyProps,
  type TableCaptionProps,
};

export type TableProps = BoxProps;

const Table = forwardRef<
  HTMLTableElement,
  PrismaneVersatileWithoutAs<"table", TableProps>
>(({ children, className, sx, ...props }, ref) => {
  return (
    <Box
      as="table"
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
}) as PrismaneWithInternal<
  PrismaneVersatileWithoutAs<"table", TableProps>,
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
