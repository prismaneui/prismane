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

export type SquareProps<E extends Versatile = "div"> = PrismaneVersatile<
  E,
  PrismaneProps<
    {
      size: PrismaneStyles;
    },
    CenterProps
  >
>;

type SquareComponent = <E extends Versatile = "div">(
  props: SquareProps<E>
) => any;

const Square: SquareComponent = forwardRef(
  <E extends Versatile>(
    { size, as, children, className, ...props }: SquareProps<E>,
    ref: PrismaneVersatileRef<E>
  ) => {
    const Component = as || "div";

    return (
      <Center
        as={Component}
        w={size}
        h={size}
        className={strip(`${className ? className : ""} PrismaneSquare-root`)}
        data-testid="prismane-square"
        ref={ref}
        {...props}
      >
        {children}
      </Center>
    );
  }
);

export default Square;
