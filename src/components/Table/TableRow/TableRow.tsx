"use client";

import React, { forwardRef } from "react";
// Components
import Box, { BoxProps } from "@components/Box";
// Utils
import { strip } from "@utils";

export type TableRowProps = BoxProps<"tr">;

const TableRow = forwardRef<HTMLTableSectionElement, TableRowProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Box
        as="tr"
        w="100%"
        bdc={(theme) => (theme.mode === "dark" ? ["base", 700] : ["base", 300])}
        className={strip(`${className ? className : ""} PrismaneTableRow-root`)}
        data-testid="prismane-table-row"
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

export default TableRow;
