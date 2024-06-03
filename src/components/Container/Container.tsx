"use client";

import React, { forwardRef } from "react";
// Components
import Flex from "@components/Flex";
// Utils
import { cx } from "@utils";
// Props
import { ContainerProps } from "./Container.props";

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ maxSize = "base", children, className, ...props }, ref) => {
    return (
      <Flex
        w="100%"
        align="center"
        direction="column"
        maw={maxSize}
        grow
        className={cx("PrismaneContainer-root", className, {
          [`PrismaneContainer-root-${maxSize}`]: true,
        })}
        data-testid="prismane-container"
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

export default Container;
