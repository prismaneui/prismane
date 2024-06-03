"use client";

import React, { forwardRef } from "react";
// Components
import Box from "@components/Box";
// Types
import { Versatile, PrismaneVersatileRef } from "@types";
import { cx } from "@utils";
// Props
import { TextProps } from "./Text.props";

type TextComponent = <E extends Versatile = "span">(props: TextProps<E>) => any;

const Text: TextComponent = forwardRef(
  <E extends Versatile = "span">(
    { as, children, className, ...props }: TextProps<E>,
    ref: PrismaneVersatileRef<E>
  ) => {
    const Component = as || "span";

    return (
      <Box
        as={Component}
        cl={(theme) => (theme.mode === "dark" ? ["base", 100] : ["base", 900])}
        className={cx("PrismaneText-root", className)}
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
