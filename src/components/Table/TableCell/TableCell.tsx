"use client";

import React, { forwardRef } from "react";
// Components
import Box, { BoxProps } from "@components/Box";
// Context
import { useTableContext } from "../TableContext";
// Utils
import { strip, fr, variants } from "@/utils";

export type TableCellProps = BoxProps<"td">;

const TableCell = forwardRef<HTMLTableSectionElement, TableCellProps>(
  ({ children, className, ...props }, ref) => {
    const { size } = useTableContext();

    return (
      <Box
        as="td"
        py={variants(size, {
          xs: fr(1.5),
          sm: fr(2.5),
          base: fr(3),
          md: fr(3.5),
          lg: fr(4),
        })}
        px={variants(size, {
          xs: fr(5),
          sm: fr(5.5),
          base: fr(6),
          md: fr(6.5),
          lg: fr(7),
        })}
        fs={size}
        cl={(theme) => (theme.mode === "dark" ? "white" : ["base", 900])}
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
