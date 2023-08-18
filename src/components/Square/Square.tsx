import { forwardRef, ForwardedRef } from "react";
// Components
import Center, { CenterProps } from "../Center/Center";
// Types
import { Versatile, PrismaneStyles, PrismaneVersatile } from "../../types";
// Utils
import { strip } from "../../utils";

export type SquareProps = {
  size: PrismaneStyles;
} & CenterProps;

const Square = forwardRef(
  <E extends Versatile>(
    { size, children, className, ...props }: PrismaneVersatile<E, SquareProps>,
    ref: ForwardedRef<any>
  ) => {
    return (
      <Center
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
