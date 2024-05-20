"use client";

import { forwardRef } from "react";
// Components
import Box, { BoxProps } from "@components/Box";
// Hooks
import useMediaQuery from "@hooks/useMediaQuery";
// Types
import { PrismaneBreakpoints, PrismaneProps } from "@types";
// Utils
import { strip, dual, fr } from "@/utils";

export type HideProps = PrismaneProps<
  {
    breakpoint?: PrismaneBreakpoints | string;
  },
  BoxProps
>;

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
        className={strip(`${className ? className : ""} PrismaneHide-root`)}
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
