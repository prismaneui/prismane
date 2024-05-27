"use client";

import React, { forwardRef } from "react";
// Components
import Flex from "@components/Flex";
// Utils
import { cx, fr } from "@utils";
// Props
import { StackProps } from "./Stack.props";

const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    { gap = fr(2), direction = "column", children, className, ...props },
    ref
  ) => {
    return (
      <Flex
        grow
        direction={direction}
        gap={gap}
        className={cx("PrismaneStack-root", className)}
        data-testid="prismane-stack"
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

export default Stack;
