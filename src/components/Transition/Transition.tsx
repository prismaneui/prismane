"use client";

import React, { forwardRef } from "react";
// Components
import Box from "@components/Box";
// Types
import { Versatile, PrismaneVersatileRef } from "@types";
// Utils
import { cx } from "@utils";
// Props
import { TransitionProps } from "./Transition.props";

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

    const property = Object.keys(transitions).includes(transition)
      ? transitions[transition]
      : transition;

    const Component = as || "div";

    return (
      <Box
        as={Component}
        className={cx("PrismaneTransition-root", className)}
        sx={{
          transitionProperty: property,
          transitionDuration: `${duration}ms`,
          transitionTimingFunction: timing,
          transitionDelay: `${delay}ms`,
          ...sx,
        }}
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
