"use client";

import React, { forwardRef } from "react";
// Components
import Box from "@components/Box";
// Hooks
import useMediaQuery from "@hooks/useMediaQuery";
// Utils
import { cx, dual, fr } from "@utils";
// Props
import { HideProps } from "./Hide.props";

const Hide = forwardRef<HTMLDivElement, HideProps>(
  ({ breakpoint = "base", children, className, ...props }, ref) => {
    const hidden = useMediaQuery(
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
        dp={hidden ? "none" : "flex"}
        className={cx("PrismaneHide-root", className)}
        ref={ref}
        data-testid="prismane-hide"
        {...props}
      >
        {children}
      </Box>
    );
  }
);

export default Hide;
