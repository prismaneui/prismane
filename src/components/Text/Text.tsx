"use client";

import { forwardRef } from "react";
// Components
import Box, { BoxProps } from "@components/Box";
// Types
import { Versatile, PrismaneVersatile, PrismaneVersatileRef } from "@types";
import { strip } from "@/utils";

export type TextProps<E extends Versatile = "span"> = PrismaneVersatile<
  E,
  BoxProps
>;

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
        className={strip(`${className ? className : ""} PrismaneText-root`)}
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
