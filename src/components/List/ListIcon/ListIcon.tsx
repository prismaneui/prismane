"use client";

import React, { forwardRef } from "react";
// Components
import Icon, { IconProps } from "@components/Icon";
// Utils
import { cx } from "@utils";

export type ListIconProps = IconProps;

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
