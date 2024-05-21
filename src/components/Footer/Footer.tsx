"use client";

import React, { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "@components/Flex";
// Utils
import { cx } from "@utils";

export type FooterProps = FlexProps<"footer">;

const Footer = forwardRef<HTMLElement, FooterProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Flex
        as="footer"
        grow
        className={cx("PrismaneFooter-root", className)}
        data-testid="prismane-footer"
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

export default Footer;
