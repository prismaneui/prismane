"use client";

import React, { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "@components/Flex";
// Utils
import { cx, fr } from "@utils";

export type StackProps = FlexProps;

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
