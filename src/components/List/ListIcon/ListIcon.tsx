"use client";

import React, { forwardRef } from "react";
// Components
import Icon from "@components/Icon";
// Utils
import { cx } from "@utils";
// Props
import { ListIconProps } from "./ListIcon.props";

const ListIcon = forwardRef<HTMLDivElement, ListIconProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Icon
        className={cx("PrismaneListIcon-root", className)}
        data-testid="prismane-list-icon"
        ref={ref as any}
        {...props}
      >
        {children}
      </Icon>
    );
  }
);

export default ListIcon;
