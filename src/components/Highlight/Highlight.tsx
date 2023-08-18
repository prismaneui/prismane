import { ForwardedRef, forwardRef } from "react";
// Components
import Box, { BoxProps } from "../Box/Box";
// Types
import { Versatile, PrismaneVersatile } from "../../types";
// Utils
import { strip, fr } from "../../utils";

export type HighlightProps = BoxProps;

const Highlight = forwardRef(
  <E extends Versatile>(
    { children, className, ...props }: PrismaneVersatile<E, HighlightProps>,
    ref: ForwardedRef<any>
  ) => {
    return (
      <Box
        as="mark"
        bg={(theme) =>
          theme.mode === "dark" ? ["primary", 700, 0.3] : ["primary", 200]
        }
        cl={(theme) => (theme.mode === "dark" ? "white" : ["base", 900])}
        p={fr(1)}
        className={strip(
          `${className ? className : ""} PrismaneHighlight-root`
        )}
        data-testid="prismane-highlight"
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

export default Highlight;
