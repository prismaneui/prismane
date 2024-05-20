"use client";

import React, { forwardRef } from "react";
// Components
import Text, { TextProps } from "@components/Text";
// Utils
import { strip } from "@/utils";

export type AlertTitleProps = TextProps;

const AlertTitle = forwardRef<HTMLSpanElement, AlertTitleProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Text
        fw="bold"
        fs="base"
        cl="inherit"
        className={strip(
          `${className ? className : ""} PrismaneAlertTitle-root`
        )}
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
