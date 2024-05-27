"use client";

import React, { forwardRef } from "react";
import { CircleNotch } from "@phosphor-icons/react";
// Components
import Icon from "@components/Icon";
// Utils
import { cx } from "@utils";
// Props
import { SpinnerProps } from "./Spinner.props";

const Spinner = forwardRef<SVGElement, SpinnerProps>(
  ({ color, size = "base", className, sx, ...props }, ref) => {
    return (
      <Icon
        size={size}
        cl={color}
        sx={{
          animation: "prismane-spin linear 0.5s infinite",
          ...sx,
        }}
        className={cx("PrismaneSpinner-root", className, {
          [`PrismaneSpinner-root-${size}`]: true,
        })}
        data-testid="prismane-spinner"
        ref={ref}
        {...props}
      >
        <CircleNotch />
      </Icon>
    );
  }
);

export default Spinner;
