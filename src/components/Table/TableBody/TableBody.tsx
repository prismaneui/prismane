"use client";

import React, { forwardRef } from "react";
// Components
import Box from "@components/Box";
// Hooks
import { usePrismaneColor } from "@/components/PrismaneProvider";
// Context
import { useTableContext } from "../TableContext";
// Utils
import { cx } from "@utils";
// Props
import { TableBodyProps } from "./TableBody.props";

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ children, className, sx, ...props }, ref) => {
    const { lines, striped } = useTableContext();

    const { getColorStyle } = usePrismaneColor();

    return (
      <Box
        as="tbody"
        sx={{
          "& > .PrismaneTableRow-root:first-child": {
            borderTopWidth: (lines === "horizontal" || lines === "both") && 1,
          },
          "& > .PrismaneTableRow-root": {
            borderBottomWidth:
              (lines === "horizontal" || lines === "both") && 1,
          },
          "& > .PrismaneTableRow-root:nth-child(odd)": {
            background: (theme) =>
              striped &&
              (theme.mode === "dark"
                ? getColorStyle(["base", 600, 0.2])
                : getColorStyle(["base", 300, 0.2])),
          },
          ...sx,
        }}
        className={cx("PrismaneTableBody-root", className)}
        data-testid="prismane-table-body"
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

export default TableBody;
