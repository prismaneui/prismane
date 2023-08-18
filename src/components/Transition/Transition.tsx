import { ForwardedRef, forwardRef } from "react";
// Components
import Box, { BoxProps } from "../Box/Box";
// Types
import { Versatile, PrismaneTransitions, PrismaneVersatile } from "../../types";
// Utils
import { strip } from "../../utils";

export type TransitionProps = {
  transition?: PrismaneTransitions | string;
  duration?: number;
  delay?: number;
  timing?: string;
} & BoxProps;

const Transition = forwardRef(
  <E extends Versatile>(
    {
      transition = "all",
      duration = 150,
      delay = 0,
      timing = "ease-in-out",
      className,
      sx,
      children,
      ...props
    }: PrismaneVersatile<E, TransitionProps>,
    ref: ForwardedRef<any>
  ) => {
    const transitions: any = {
      all: "all",
      colors:
        "color, background-color, border-color, text-decoration-color, fill, stroke",
      opacity: "opacity",
      shadow: "box-shadow, filter",
      transform: "transform",
    };

    const t = {
      property: Object.keys(transitions).includes(transition)
        ? transitions[transition]
        : transition,
      duration,
      timing,
      delay,
    };

    const ts = `${t.property} ${t.duration}ms ${t.timing} ${t.delay}ms`;

    return (
      <Box
        className={strip(
          `${className ? className : ""} PrismaneTransition-root`
        )}
        sx={{ transition: ts, ...sx }}
        data-testid="prismane-transition"
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

export default Transition;
