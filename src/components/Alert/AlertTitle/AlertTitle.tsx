"use client";

import React, { forwardRef } from "react";
// Components
import Text from "@components/Text";
// Utils
import { cx } from "@utils";
// Props
import { AlertTitleProps } from "./AlertTitle.props";

const AlertTitle = forwardRef<HTMLSpanElement, AlertTitleProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Text
        fw="bold"
        fs="base"
        cl="inherit"
        className={cx("PrismaneAlertTitle-root", className)}
        data-testid="prismane-alert-title"
        ref={ref}
        {...props}
      >
        {children}
      </Text>
    );
  }
);

export default AlertTitle;
