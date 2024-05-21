"use client";

import React, { forwardRef } from "react";
// Components
import Box, { BoxProps } from "@components/Box";
// Types
import { PrismaneStyles, PrismaneProps } from "@types";
// Utils
import { cx } from "@utils";

export type AspectRatioProps = PrismaneProps<
  {
    ratio?: string;
    size?: PrismaneStyles;
  },
  BoxProps
>;

const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ ratio, size, children, className, style, ...props }, ref) => {
    return (
      <Box
        className={cx("PrismaneAspectRatio-root", className)}
        w={size}
        style={{
          aspectRatio: ratio,
          ...style,
        }}
        ref={ref}
        data-testid="prismane-aspect-ratio"
        {...props}
      >
        {children}
      </Box>
    );
  }
);

export default AspectRatio;
