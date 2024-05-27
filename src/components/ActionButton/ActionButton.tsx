"use client";

import React, { forwardRef } from "react";
// Components
import Button from "@components/Button";
// Utils
import { cx, fr, variants } from "@utils";
// Props
import { ActionButtonProps } from "./ActionButton.props";

const ActionButton = forwardRef<any, ActionButtonProps>(
  (
    {
      size = "base",
      color = "primary",
      variant = "tertiary",
      children,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <Button
        px={variants(size, {
          xs: fr(1),
          sm: fr(1.5),
          base: fr(2),
          md: fr(2.5),
          lg: fr(3),
        })}
        py={variants(size, {
          xs: fr(1),
          sm: fr(1.5),
          base: fr(2),
          md: fr(2.5),
          lg: fr(3),
        })}
        ref={ref}
        size={size}
        color={color}
        variant={variant}
        className={cx("PrismaneActionButton-root", className, {
          [`PrismaneActionButton-${size}`]: true,
          [`PrismaneActionButton-${color}`]: true,
          [`PrismaneActionButton-${variant}`]: true,
        })}
        data-testid="prismane-action-button"
        {...props}
      >
        {children}
      </Button>
    );
  }
);

export default ActionButton;
