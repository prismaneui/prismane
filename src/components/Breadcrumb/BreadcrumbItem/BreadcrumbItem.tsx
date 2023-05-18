import { forwardRef, ForwardedRef } from "react";
// Components
import Flex, { FlexProps } from "../../Flex/Flex";
import Link from "../../Link/Link";
// Types
import { Versatile } from "../../../types";
// Utils
import { strip } from "../../../utils";

export type BreadcrumbItemProps<E extends Versatile> = FlexProps<E>;

const BreadcrumbItem = forwardRef(
  <E extends Versatile>(
    { as = Link, children, className, ...props }: BreadcrumbItemProps<E>,
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
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

export default BreadcrumbItem;
