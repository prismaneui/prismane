import { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "../../Flex/Flex";
import Link from "../../Link/Link";
// Types
import {
  Versatile,
  PrismaneVersatile,
  PrismaneVersatileRef,
} from "../../../types";
// Utils
import { strip } from "../../../utils";

export type BreadcrumbItemProps<E extends Versatile = typeof Link> =
  PrismaneVersatile<E, FlexProps<E>>;

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
