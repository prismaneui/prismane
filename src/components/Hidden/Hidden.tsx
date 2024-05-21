"use client";

import React, { forwardRef } from "react";
// Components
import Box, { BoxProps } from "@components/Box";
// Utils
import { cx } from "@utils";

export type HiddenProps = BoxProps;

const Hidden = forwardRef<HTMLSpanElement, HiddenProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Box
        as="span"
        w={0}
        h={0}
        of="hidden"
        dp="block"
        className={cx("PrismaneHidden-root", className)}
        data-testid="prismane-hidden"
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

export default Hidden;
