"use client";

import React, { forwardRef } from "react";
// Components
import Box from "@components/Box";
// Utils
import { cx } from "@utils";
// Props
import { TableHeadProps } from "./TableHead.props";

const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Box
        as="thead"
        fw="semibold"
        cl={(theme) => (theme.mode === "dark" ? ["base", 200] : ["base", 700])}
        className={cx("PrismaneTableHead-root", className)}
        data-testid="prismane-table-head"
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

export default TableHead;
