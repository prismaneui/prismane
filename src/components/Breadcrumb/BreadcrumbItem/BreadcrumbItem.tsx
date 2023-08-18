import { forwardRef, ForwardedRef } from "react";
// Components
import Flex, { FlexProps } from "../../Flex/Flex";
import Link from "../../Link/Link";
// Types
import { Versatile, PrismaneVersatile } from "../../../types";
// Utils
import { strip } from "../../../utils";

export type BreadcrumbItemProps = FlexProps;

const BreadcrumbItem = forwardRef(
  <E extends Versatile>(
    {
      as = Link,
      children,
      className,
      ...props
    }: PrismaneVersatile<E, BreadcrumbItemProps>,
    ref: ForwardedRef<any>
  ) => {
    return (
      <Flex
        as={as}
        align="center"
        justify="center"
        className={strip(
          `${className ? className : ""} PrismaneBreadcrumbItem-root`
        )}
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
