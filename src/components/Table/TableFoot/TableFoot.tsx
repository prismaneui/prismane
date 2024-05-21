"use client";

import React, { forwardRef } from "react";
// Components
import Box, { BoxProps } from "@components/Box";
// Utils
import { cx } from "@utils";

export type TableFootProps = BoxProps<"tfoot">;

const TableFoot = forwardRef<HTMLTableSectionElement, TableFootProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Box
        as="tfoot"
        fw="semibold"
        cl={(theme) => (theme.mode === "dark" ? ["base", 200] : ["base", 700])}
        className={cx("PrismaneTableFoot-root", className)}
        data-testid="prismane-table-foot"
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

export default TableFoot;
