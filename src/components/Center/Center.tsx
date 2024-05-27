"use client";

import React, { forwardRef } from "react";
// Components
import Flex from "@components/Flex";
// Types
import { Versatile, PrismaneVersatileRef } from "@types";
// Utils
import { cx } from "@utils";
// Props
import { CenterProps } from "./Center.props";

type CenterComponent = <E extends Versatile = "div">(
  props: CenterProps<E>
) => any;

const Center: CenterComponent = forwardRef(
  <E extends Versatile = "div">(
    { as, children, className, ...props }: CenterProps<E>,
    ref: PrismaneVersatileRef<E>
  ) => {
    const Component = as || "div";

    return (
      <Flex
        as={Component}
        justify="center"
        align="center"
        className={cx("PrismaneCenter-root", className)}
        data-testid="prismane-center"
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

export default Center;
