"use client";

import React, { forwardRef } from "react";
// Components
import Center from "@components/Center";
// Types
import { Versatile, PrismaneVersatileRef } from "@types";
// Utils
import { cx } from "@utils";
// Props
import { SquareProps } from "./Square.props";

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
        className={cx("PrismaneSquare-root", className)}
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
