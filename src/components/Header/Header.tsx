"use client";

import React, { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "@components/Flex";
// Utils
import { cx } from "@utils";

export type HeaderProps = FlexProps<"header">;

const Header = forwardRef<HTMLElement, HeaderProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Flex
        as="header"
        align="center"
        grow
        className={cx("PrismaneHeader-root", className)}
        data-testid="prismane-header"
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

export default Header;
