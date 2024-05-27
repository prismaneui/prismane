"use client";

import React, { forwardRef } from "react";
// Components
import Flex from "@components/Flex";
// Utils
import { cx, fr } from "@utils";
// Props
import { MenuLabelProps } from "./MenuLabel.props";

const MenuLabel = forwardRef<HTMLDivElement, MenuLabelProps>(
  ({ color = "base", children, className, sx, ...props }, ref) => {
    return (
      <Flex
        gap={fr(2)}
        py={fr(0.5)}
        px={fr(3)}
        fs="sm"
        cl={(theme) => (theme.mode === "dark" ? [color, 400] : [color, 600])}
        bdc={(theme) => (theme.mode === "dark" ? ["base", 700] : ["base", 200])}
        sx={{
          "&:not(:first-child)": {
            marginTop: fr(4),
          },
          ...sx,
        }}
        className={cx("PrismaneMenuLabel-root", className, {
          [`PrismaneMenuLabel-root-${color}`]: true,
        })}
        data-testid="prismane-menu-label"
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

export default MenuLabel;
