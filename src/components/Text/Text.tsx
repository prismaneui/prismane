import { ForwardedRef, forwardRef } from "react";
// Components
import Box, { BoxProps } from "../Box/Box";
// Types
import { Versatile, PrismaneVersatile } from "../../types";
import { strip } from "../../utils";

export type TextProps = BoxProps;

const Text = forwardRef(
  <E extends Versatile>(
    {
      as = "span",
      children,
      className,
      ...props
    }: PrismaneVersatile<E, TextProps>,
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
