import { forwardRef } from "react";
// Components
import Box, { BoxProps } from "../Box/Box";
// Types
import {
  PrismaneTransitions,
  Versatile,
  PrismaneVersatile,
  PrismaneVersatileRef,
} from "../../types";
// Utils
import { strip } from "../../utils";

export type TransitionProps<E extends Versatile = "div"> = PrismaneVersatile<
  E,
  {
    transition?: PrismaneTransitions | string;
    duration?: number;
    delay?: number;
    timing?: string;
  } & BoxProps<E>
>;

type TransitionComponent = <E extends Versatile = "div">(
  props: TransitionProps<E>
) => any;

const Transition: TransitionComponent = forwardRef(
  <E extends Versatile = "div">(
    {
      transition = "all",
      duration = 150,
      delay = 0,
      timing = "ease-in-out",
      className,
      sx,
      as,
      children,
      ...props
    }: TransitionProps<E>,
    ref: PrismaneVersatileRef<E>
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

    const Component = as || "div";

    return (
      <Box
        as={Component}
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
