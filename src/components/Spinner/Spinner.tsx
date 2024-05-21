"use client";

import React, { forwardRef } from "react";
import { CircleNotch } from "@phosphor-icons/react";
import * as CSS from "csstype";
// Components
import Icon, { IconProps } from "@components/Icon";
// Types
import { PrismaneProps, PrismaneColors, PrismaneShades } from "@types";
// Utils
import { cx } from "@utils";

export type SpinnerProps = PrismaneProps<
  {
    color?:
      | PrismaneColors
      | [PrismaneColors, PrismaneShades]
      | [PrismaneColors, PrismaneShades, number]
      | CSS.Properties["color"];
  },
  IconProps
>;

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
