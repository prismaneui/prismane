"use client";

import React, { forwardRef } from "react";
// Components
import Box from "@components/Box";
// Utils
import { cx } from "@utils";
// Props
import { TableRowProps } from "./TableRow.props";

const TableRow = forwardRef<HTMLTableSectionElement, TableRowProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Box
        as="tr"
        w="100%"
        bdc={(theme) => (theme.mode === "dark" ? ["base", 700] : ["base", 300])}
        className={cx("PrismaneTableRow-root", className)}
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
