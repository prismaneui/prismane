"use client";

import React, { forwardRef } from "react";
import { X } from "@phosphor-icons/react";
// Components
import ActionButton, { ActionButtonProps } from "@components/ActionButton";
// Utils
import { variants } from "@utils";

export type CloseButtonProps = ActionButtonProps;

const CloseButton = forwardRef<any, CloseButtonProps>(
  ({ size = "base", variant = "secondary", color = "base", ...props }, ref) => {
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
        ref={ref}
        {...props}
      />
    );
  }
);

export default CloseButton;
