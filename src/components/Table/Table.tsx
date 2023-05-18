import { forwardRef } from "react";
// Components
import Box, { BoxProps } from "../Box/Box";
// Types
import { PrismaneWithInternal } from "../../types";
// Utils
import { strip } from "../../utils";

// Internal Components
import TableRow, { TableRowProps } from "./TableRow/TableRow";
import TableHead, { TableHeadProps } from "./TableHead/TableHead";
import TableFoot, { TableFootProps } from "./TableFoot/TableFoot";
import TableCell, { TableCellProps } from "./TableCell/TableCell";
import TableBody, { TableBodyProps } from "./TableBody/TableBody";
import TableCaption, { TableCaptionProps } from "./TableCaption/TableCaption";

export { type TableRowProps };
export { type TableHeadProps };
export { type TableFootProps };
export { type TableCellProps };
export { type TableBodyProps };
export { type TableCaptionProps };

export type TableProps = BoxProps<"table">;

const Table: PrismaneWithInternal<
  TableProps,
  {
    Row: TableRowProps;
    Head: TableHeadProps;
    Foot: TableFootProps;
    Cell: TableCellProps;
    Body: TableBodyProps;
    Caption: TableCaptionProps;
  }
> = forwardRef<HTMLTableElement, TableProps>(
  ({ children, className, sx, ...props }, ref) => {
    return (
      <Box
        as="table"
        sx={{
          borderCollapse: "collapse",
          ...sx,
        }}
        className={strip(`${className ? className : ""} PrismaneTable-root`)}
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

Table.Row = TableRow;
Table.Head = TableHead;
Table.Foot = TableFoot;
Table.Cell = TableCell;
Table.Body = TableBody;
Table.Caption = TableCaption;

export default Table;
