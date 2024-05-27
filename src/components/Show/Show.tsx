"use client";

import React, { forwardRef } from "react";
// Components
import Box from "@components/Box";
// Hooks
import useMediaQuery from "@hooks/useMediaQuery/useMediaQuery";
// Utils
import { cx, dual, fr } from "@utils";
// Props
import { ShowProps } from "./Show.props";

const Show = forwardRef<HTMLDivElement, ShowProps>(
  ({ breakpoint = "base", children, className, ...props }, ref) => {
    const shown = useMediaQuery(
      `(min-width: ${dual(breakpoint, {
        xs: fr(160),
        sm: fr(192),
        base: fr(256),
        md: fr(320),
        lg: fr(384),
      })})`
    );

    return (
      <Box
        dp={shown ? "flex" : "none"}
        className={cx("PrismaneShow-root", className)}
        data-testid="prismane-show"
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

export default Show;
