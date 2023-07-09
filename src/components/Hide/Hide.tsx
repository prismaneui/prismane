import { forwardRef } from "react";
// Components
import Box, { BoxProps } from "../Box/Box";
// Hooks
import useMediaQuery from "../../hooks/useMediaQuery";
// Types
import { PrismaneBreakpoints } from "../../types";
// Utils
import { strip, dual, fr } from "../../utils";

export type HideProps = {
  breakpoint?: PrismaneBreakpoints | string;
} & BoxProps<"div">;

const Hide = forwardRef<HTMLDivElement, HideProps>(
  ({ breakpoint = "base", children, className, ...props }, ref) => {
    const hidden = useMediaQuery(
      `(min-width: ${dual(breakpoint, {
        xs: fr(160),
        sm: fr(192),
        base: fr(256),
        md: fr(320),
        lg: fr(384),
      })})`
    );

    return (
      <Box
        dp={hidden ? "none" : "flex"}
        className={strip(`${className ? className : ""} PrismaneHide-root`)}
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

export default Hide;
