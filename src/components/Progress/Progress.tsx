"use client";

import React, { forwardRef } from "react";
import * as CSS from "csstype";
// Components
import Flex, { FlexProps } from "@components/Flex";
import Transition, { TransitionProps } from "@components/Transition";
// Types
import {
  PrismaneBreakpoints,
  PrismaneProps,
  PrismaneColors,
  PrismaneShades,
} from "@types";
// Utils
import { strip, fr, dual } from "@utils";

export type ProgressProps = PrismaneProps<
  {
    value: number;
    size?: string | number | PrismaneBreakpoints;
    color?:
      | PrismaneColors
      | [PrismaneColors, PrismaneShades]
      | [PrismaneColors, PrismaneShades, number]
      | CSS.Properties["color"];
  },
  FlexProps & TransitionProps
>;

const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ value, size = "base", color = "primary", className, ...props }, ref) => {
    return (
      <Transition
        as={Flex}
        h={dual(size, {
          xs: fr(0.5),
          sm: fr(1),
          base: fr(1.5),
          md: fr(2),
          lg: fr(2.5),
        })}
        w="100%"
        br="full"
        bg={(theme) => (theme.mode === "dark" ? ["base", 700] : ["base", 200])}
        grow
        className={strip(
          `${
            className ? className : ""
          } PrismaneProgress-root-${size} PrismaneProgress-root`
        )}
        data-testid="prismane-progress"
        ref={ref}
        {...props}
      >
        <Transition
          as={Flex}
          justify="center"
          align="center"
          h="100%"
          w={value ? value.toString() + "%" : 0}
          br="full"
          bg={color}
          cl="white"
          className="PrismaneLoader-line"
        />
      </Transition>
    );
  }
);

export default Progress;
