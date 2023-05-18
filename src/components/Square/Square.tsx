import { forwardRef, ForwardedRef } from "react";
// Components
import Center, { CenterProps } from "../Center/Center";
// Types
import { Versatile, PrismaneStyles } from "../../types";
// Utils
import { strip } from "../../utils";

export type SquareProps<E extends Versatile> = {
  size: PrismaneStyles;
} & CenterProps<E>;

const Square = forwardRef(
  <E extends Versatile>(
    { size, children, className, ...props }: SquareProps<E>,
    ref: ForwardedRef<any>
  ) => {
    return (
      <Center
        w={size}
        h={size}
        className={strip(`${className ? className : ""} PrismaneSquare-root`)}
        ref={ref}
        {...props}
      >
        {children}
      </Center>
    );
  }
);

export default Square;
