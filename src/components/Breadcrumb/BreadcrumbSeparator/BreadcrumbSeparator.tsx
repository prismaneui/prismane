"use client";

import React, { forwardRef } from "react";
// Components
import Flex from "@components/Flex";
// Utils
import { cx } from "@utils";
// Props
import { BreadcrumbSeparatorProps } from "./BreadcrumbSeparator.props";

const BreadcrumbSeparator = forwardRef<
  HTMLDivElement,
  BreadcrumbSeparatorProps
>(({ children = "/", className, ...props }, ref) => {
  return (
    <Flex
      align="center"
      justify="center"
      cl={(theme) => (theme.mode === "dark" ? ["base", 700] : ["base", 300])}
      className={cx("PrismaneBreadcrumbSeparator-root", className)}
      data-testid="prismane-breadcrumb-separator"
      ref={ref}
      {...props}
    >
      {children}
    </Flex>
  );
});

export default BreadcrumbSeparator;
