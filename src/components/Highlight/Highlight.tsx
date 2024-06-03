"use client";

import React, { forwardRef } from "react";
// Components
import Box from "@components/Box";
// Types
import { PrismaneVersatileRef, Versatile } from "@types";
// Utils
import { cx, fr } from "@utils";
// Props
import { HighlightProps } from "./Highlight.props";

type HighlightComponent = <E extends Versatile = "mark">(
  props: HighlightProps<E>
) => any;

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
        className={cx("PrismaneHighlight-root", className)}
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
