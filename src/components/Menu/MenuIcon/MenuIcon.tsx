"use client";

import React, { forwardRef } from "react";
// Components
import Icon from "@components/Icon";
// Utils
import { cx } from "@utils";
// Props
import { MenuIconProps } from "./MenuIcon.props";

const MenuIcon = forwardRef<HTMLDivElement, MenuIconProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Icon
        className={cx("PrismaneMenuIcon-root", className)}
        data-testid="prismane-menu-icon"
        ref={ref as any}
        {...props}
        size="sm"
      >
        {children}
      </Icon>
    );
  }
);

export default MenuIcon;
