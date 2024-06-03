"use client";

import React, { forwardRef } from "react";
// Components
import Center from "@components/Center";
// Types
import { Versatile, PrismaneVersatileRef } from "@types";
// Utils
import { cx } from "@utils";
// Props
import { CircleProps } from "./Circle.props";

type CircleComponent = <E extends Versatile = "div">(
  props: CircleProps<E>
) => any;

const Circle: CircleComponent = forwardRef(
  <E extends Versatile = "div">(
    { size, as, children, className, ...props }: CircleProps<E>,
    ref: PrismaneVersatileRef<E>
  ) => {
    const Component = as || "div";

    return (
      <Center
        as={Component}
        w={size}
        h={size}
        br="100%"
        className={cx("PrismaneCircle-root", className)}
        data-testid="prismane-circle"
        ref={ref}
        {...props}
      >
        {children}
      </Center>
    );
  }
);

export default Circle;
