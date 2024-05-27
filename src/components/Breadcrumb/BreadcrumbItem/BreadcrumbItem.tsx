"use client";

import React, { forwardRef } from "react";
// Components
import Flex from "@components/Flex";
import Link from "@components/Link";
// Types
import { PrismaneVersatileRef, Versatile } from "@types";
// Utils
import { cx } from "@utils";
// Props
import { BreadcrumbItemProps } from "./BreadcrumbItem.props";

const BreadcrumbItem = forwardRef(
  <E extends Versatile = typeof Link>(
    { as, children, className, ...props }: BreadcrumbItemProps<E>,
    ref: PrismaneVersatileRef<E>
  ) => {
    const Component = as || Link;

    return (
      <Flex
        as={Component}
        align="center"
        justify="center"
        className={cx("PrismaneBreadcrumbItem-root", className)}
        data-testid="prismane-breadcrumb-item"
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

export default BreadcrumbItem;
