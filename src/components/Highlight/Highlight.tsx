import { forwardRef } from "react";
// Components
import Box, { BoxProps } from "../Box/Box";
// Types
import {
  Versatile,
  PrismaneVersatile,
  PrismaneVersatileRef,
} from "../../types";
// Utils
import { strip, fr } from "../../utils";

export type HighlightProps<E extends Versatile = "mark"> = PrismaneVersatile<
  E,
  BoxProps<E>
>;

type HighlightComponent = <E extends Versatile = "mark">(
  props: HighlightProps<E>
) => React.ReactNode | null;

const Highlight: HighlightComponent = forwardRef(
  <E extends Versatile = "mark">(
    { as, children, className, ...props }: HighlightProps<E>,
    ref: PrismaneVersatileRef<E>
  ) => {
    const Component = as || "mark";

    return (
      <Box
        as={Component}
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
