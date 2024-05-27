"use client";

import React, { forwardRef } from "react";
// Components
import Square from "@components/Square";
// Utils
import { cx, dual, fr } from "@utils";
// Props
import { IconProps } from "./Icon.props";

const Icon = forwardRef<HTMLDivElement, IconProps>(
  ({ size = "base", children, className, sx, ...props }, ref) => {
    return (
      <Square
        size={dual(size, {
          xs: fr(4),
          sm: fr(5),
          base: fr(6),
          md: fr(7),
          lg: fr(8),
        })}
        className={cx("PrismaneIcon-root", className, {
          [`PrismaneIcon-root-${size}`]: true,
        })}
        sx={{
          fontSize: dual(size, {
            xs: fr(4),
            sm: fr(5),
            base: fr(6),
            md: fr(7),
            lg: fr(8),
          }),
          ...sx,
        }}
        data-testid="prismane-icon"
        ref={ref}
        {...props}
      >
        {children}
      </Square>
    );
  }
);

export default Icon;
