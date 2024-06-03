"use client";

import React, { forwardRef } from "react";
// Components
import List from "@components/List";
// Utils
import { cx } from "@utils";
// Props
import { ListUnorderedProps } from "./ListUnordered.props";

const ListUnordered = forwardRef<HTMLUListElement, ListUnorderedProps>(
  ({ gap = 0, children, className, sx, ...props }, ref) => {
    return (
      <List
        as="ul"
        gap={gap}
        sx={{
          listStyleType: "revert",
          ...sx,
        }}
        className={cx("PrismaneListUnordered-root", className)}
        data-testid="prismane-list-unordered"
        ref={ref}
        {...props}
      >
        {children}
      </List>
    );
  }
);

export default ListUnordered;
