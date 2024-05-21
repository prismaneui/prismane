"use client";

import React, { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "@components/Flex";
// Types
import { Versatile, PrismaneVersatile, PrismaneVersatileRef } from "@types";
// Utils
import { strip } from "@utils";

export type CenterProps<E extends Versatile = "div"> = PrismaneVersatile<
  E,
  FlexProps
>;

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
        className={strip(`${className ? className : ""} PrismaneCenter-root`)}
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
