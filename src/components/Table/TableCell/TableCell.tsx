import { forwardRef } from "react";
// Components
import Box, { BoxProps } from "@components/Box";
// Utils
import { strip, fr } from "@/utils";

export type TableCellProps = BoxProps<"td">;

const TableCell = forwardRef<HTMLTableSectionElement, TableCellProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Box
        as="td"
        ta="start"
        py={fr(3)}
        px={fr(6)}
        cl={(theme) => (theme.mode === "dark" ? "white" : ["base", 900])}
        bdtw={1}
        bdc={(theme) => (theme.mode === "dark" ? ["base", 700] : ["base", 300])}
        className={strip(
          `${className ? className : ""} PrismaneTableCell-root`
        )}
        data-testid="prismane-table-cell"
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

export default TableCell;
