"use client";

import React, { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "@components/Flex";
// Utils
import { cx, fr } from "@utils";

export type MainProps = FlexProps<"main">;

const Main = forwardRef<HTMLElement, MainProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Flex
        as="main"
        px={fr(5)}
        py={fr(3)}
        grow
        className={cx("PrismaneMain-root", className)}
        data-testid="prismane-main"
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

export default Main;
