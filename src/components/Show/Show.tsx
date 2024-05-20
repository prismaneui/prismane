"use client";

import React, { forwardRef } from "react";
// Components
import Box, { BoxProps } from "@components/Box";
// Hooks
import useMediaQuery from "@hooks/useMediaQuery/useMediaQuery";
// Types
import { PrismaneBreakpoints, PrismaneProps } from "@types";
// Utils
import { strip, dual, fr } from "@/utils";

export type ShowProps = PrismaneProps<
  {
    breakpoint?: PrismaneBreakpoints | string;
  },
  BoxProps
>;

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
        className={strip(`${className ? className : ""} PrismaneShow-root`)}
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
