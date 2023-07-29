import { ForwardedRef, forwardRef } from "react";
// Components
import Box, { BoxProps } from "../Box/Box";
// Types
import { Versatile } from "../../types";
import { strip } from "../../utils";

export type TextProps<E extends Versatile> = BoxProps<E>;

const Text = forwardRef(
  <E extends Versatile>(
    { as = "span", children, className, ...props }: TextProps<E>,
    ref: ForwardedRef<any>
  ) => {
    return (
      <Box
        as={as}
        className={strip(`${className ? className : ""} PrismaneText-root`)}
        data-testid="prismane-text"
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

export default Text;
