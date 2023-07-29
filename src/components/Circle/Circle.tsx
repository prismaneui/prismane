import { ForwardedRef, forwardRef } from "react";
// Components
import Center, { CenterProps } from "../Center/Center";
// Types
import { PrismaneStyles, Versatile } from "../../types";
// Utils
import { strip } from "../../utils";

export type CircleProps<E extends Versatile> = {
  size: PrismaneStyles;
} & CenterProps<E>;

const Circle = forwardRef(
  <E extends Versatile>(
    { size, children, className, ...props }: CircleProps<E>,
    ref: ForwardedRef<any>
  ) => {
    return (
      <Center
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
