"use client";

import React, { forwardRef } from "react";
// Components
import Flex from "@components/Flex";
// Context
import { usePopoverContext } from "../PopoverContext";
// Utils
import { cx } from "@utils";
// Props
import { PopoverControlProps } from "./PopoverControl.props";

const PopoverControl = forwardRef<HTMLDivElement, PopoverControlProps>(
  ({ children, className, ...props }, ref) => {
    const { open, setOpen } = usePopoverContext();

    return (
      <Flex
        onClick={() => {
          setOpen(!open);
        }}
        className={cx("PrismanePopoverControl-root", className, {
          "PrismanePopoverControl-root-open": open,
        })}
        data-testid="prismane-popover-control"
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

export default PopoverControl;
