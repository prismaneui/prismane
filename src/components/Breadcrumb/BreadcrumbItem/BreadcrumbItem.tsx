"use client";

import React, { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "@components/Flex";
import Link from "@components/Link";
// Types
import { Versatile, PrismaneVersatile, PrismaneVersatileRef } from "@types";
// Utils
import { cx } from "@utils";

export type BreadcrumbItemProps<E extends Versatile = typeof Link> =
  PrismaneVersatile<E, FlexProps>;

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
