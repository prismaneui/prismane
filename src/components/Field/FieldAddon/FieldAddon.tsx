"use client";

import React, { forwardRef } from "react";
// Components
import Transition from "@components/Transition";
import Flex from "@components/Flex";
// Utils
import { cx, variants, fr } from "@utils";
// Props
import { FieldAddonProps } from "./FieldAddon.props";

const FieldAddon = forwardRef<HTMLDivElement, FieldAddonProps>(
  (
    { size = "base", position = "right", children, className, sx, ...props },
    ref
  ) => {
    return (
      <Transition
        as={Flex}
        h="100%"
        mr={position === "left" ? fr(2) : undefined}
        ml={position === "right" ? fr(2) : undefined}
        fs={variants(size, {
          xs: "xs",
          sm: "sm",
          base: "sm",
          md: "base",
          lg: "md",
        })}
        align="center"
        justify="center"
        className={cx("PrismaneFieldAddon-root", className)}
        sx={{
          order: position === "right" ? 1 : -1,
          ...sx,
        }}
        data-testid="prismane-field-addon"
        ref={ref}
        {...props}
      >
        {children}
      </Transition>
    );
  }
);

export default FieldAddon;
