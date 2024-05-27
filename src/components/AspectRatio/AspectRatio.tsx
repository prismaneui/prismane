"use client";

import React, { forwardRef } from "react";
// Components
import Box from "@components/Box";
// Utils
import { cx } from "@utils";
// Props
import { AspectRatioProps } from "./AspectRatio.props";

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
