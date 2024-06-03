"use client";

import React, { forwardRef } from "react";
// Components
import Flex from "@components/Flex";
import Transition from "@components/Transition";
// Utils
import { cx, fr, dual } from "@utils";
// Props
import { ProgressProps } from "./Progress.props";

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
        className={cx("PrismaneProgress-root", className, {
          [`PrismaneProgress-root-${size}`]: true,
        })}
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
