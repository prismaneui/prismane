"use client";

import { forwardRef } from "react";
// Components
import Box, { BoxProps } from "@components/Box";
// Utils
import { strip, fr } from "@/utils";

export type KeyProps = BoxProps<"kbd">;

const Key = forwardRef<HTMLDivElement, KeyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Box
        as="kbd"
        fs="xs"
        w="fit-content"
        px={fr(1)}
        bg={(theme) => (theme.mode === "dark" ? ["base", 700] : ["base", 200])}
        br="sm"
        bdxw={1}
        bdbw={3}
        bdc={(theme) => (theme.mode === "dark" ? ["base", 600] : ["base", 400])}
        cl={(theme) => (theme.mode === "dark" ? ["base", 200] : ["base", 700])}
        className={strip(`${className ? className : ""} PrismaneKey-root`)}
        data-testid="prismane-key"
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

export default Key;
