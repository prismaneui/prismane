"use client";

import React, { forwardRef } from "react";
// Components
import List from "@components/List";
// Utils
import { cx } from "@utils";
// Props
import { ListOrderedProps } from "./ListOrdered.props";

const ListOrdered = forwardRef<HTMLOListElement, ListOrderedProps>(
  ({ gap = 0, children, className, sx, ...props }, ref) => {
    return (
      <List
        as="ol"
        gap={gap}
        sx={{
          listStyleType: "revert",
          ...sx,
        }}
        className={cx("PrismaneListOrdered-root", className)}
        data-testid="prismane-list-ordered"
        ref={ref}
        {...props}
      >
        {children}
      </List>
    );
  }
);

export default ListOrdered;
