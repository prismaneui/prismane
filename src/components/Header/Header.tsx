"use client";

import React, { forwardRef } from "react";
// Components
import Flex from "@components/Flex";
// Utils
import { cx } from "@utils";
// Props
import { HeaderProps } from "./Header.props";

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
