"use client";

import React, { forwardRef } from "react";
// Components
import Box from "@components/Box";
// Context
import { useTableContext } from "../TableContext";
// Utils
import { cx, fr, variants } from "@utils";
// Props
import { TableCaptionProps } from "./TableCaption.props";

const TableCaption = forwardRef<HTMLTableSectionElement, TableCaptionProps>(
  ({ placement = "bottom", children, className, sx, ...props }, ref) => {
    const { size } = useTableContext();

    return (
      <Box
        as="caption"
        mt={variants(size, {
          xs: fr(3),
          sm: fr(3.5),
          base: fr(4),
          md: fr(4.5),
          lg: fr(5),
        })}
        py={variants(size, {
          xs: fr(1),
          sm: fr(1.5),
          base: fr(2),
          md: fr(2.5),
          lg: fr(3),
        })}
        fs={size}
        className={cx("PrismaneTableCaption-root", className)}
        sx={{
          captionSide: placement,
          ...sx,
        }}
        data-testid="prismane-table-caption"
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

export default TableCaption;
