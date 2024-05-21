"use client";

import React, { forwardRef } from "react";
// Components
import Center, { CenterProps } from "@components/Center";
// Types
import {
  PrismaneStyles,
  Versatile,
  PrismaneVersatile,
  PrismaneVersatileRef,
  PrismaneProps,
} from "@types";
// Utils
import { strip } from "@utils";

export type CircleProps<E extends Versatile = "div"> = PrismaneVersatile<
  E,
  PrismaneProps<
    {
      size: PrismaneStyles;
    },
    CenterProps
  >
>;

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
        className={strip(`${className ? className : ""} PrismaneCircle-root`)}
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
