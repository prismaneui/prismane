"use client";

import React, { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "@components/Flex";
// Types
import { PrismaneWithInternal } from "@types";
// Utils
import { cx, fr } from "@utils";

// Internal Components
import BreadcrumbItem, { BreadcrumbItemProps } from "./BreadcrumbItem";
import BreadcrumbSeparator, {
  BreadcrumbSeparatorProps,
} from "./BreadcrumbSeparator";

export { type BreadcrumbItemProps, type BreadcrumbSeparatorProps };

export type BreadcrumbProps = FlexProps;

const Breadcrumb = forwardRef<HTMLDivElement, BreadcrumbProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Flex
        align="center"
        className={cx("PrismaneBreadcrumb-root", className)}
        gap={fr(2)}
        cl="primary"
        data-testid="prismane-breadcrumb"
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    );
  }
) as PrismaneWithInternal<
  BreadcrumbProps,
  {
    Item: BreadcrumbItemProps;
    Separator: BreadcrumbSeparatorProps;
  }
>;

Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.Separator = BreadcrumbSeparator;

export default Breadcrumb;
