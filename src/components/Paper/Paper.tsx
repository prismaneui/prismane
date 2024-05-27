"use client";

import React, { forwardRef } from "react";
// Components
import Flex from "@components/Flex";
// Types
import { Versatile, PrismaneVersatileRef } from "@types";
// Utils
import { cx } from "@utils";
// Props
import { PaperProps } from "./Paper.props";

type PaperComponent = <E extends Versatile = "div">(
  props: PaperProps<E>
) => any;

const Paper: PaperComponent = forwardRef(
  <E extends Versatile = "div">(
    { as, children, className, shadow, ...props }: PaperProps<E>,
    ref: PrismaneVersatileRef<E>
  ) => {
    const Component = as || "div";

    return (
      <Flex
        as={Component}
        direction="column"
        br="md"
        bg={(theme) => (theme.mode === "dark" ? ["base", 800] : "white")}
        bsh={shadow && "base"}
        className={cx("PrismanePaper-root", className)}
        data-testid="prismane-paper"
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

export default Paper;
