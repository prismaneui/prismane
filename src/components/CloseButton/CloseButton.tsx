"use client";

import React, { forwardRef } from "react";
import { X } from "@phosphor-icons/react";
// Components
import ActionButton from "@components/ActionButton";
// Utils
import { cx, variants } from "@utils";
// Props
import { CloseButtonProps } from "./CloseButton.props";

const CloseButton = forwardRef<any, CloseButtonProps>(
  (
    {
      size = "base",
      variant = "secondary",
      color = "base",
      className,
      ...props
    },
    ref
  ) => {
    return (
      <ActionButton
        color={color}
        size={size}
        variant={variant}
        icon={
          <X
            size={variants(size, {
              xs: 8,
              sm: 12,
              base: 16,
              md: 20,
              lg: 24,
            })}
            weight="bold"
          />
        }
        className={cx("PrismaneCloseButton-root", className, {
          [`PrismaneCloseButton-${size}`]: true,
          [`PrismaneCloseButton-${color}`]: true,
          [`PrismaneCloseButton-${variant}`]: true,
        })}
        ref={ref}
        {...props}
      />
    );
  }
);

export default CloseButton;
