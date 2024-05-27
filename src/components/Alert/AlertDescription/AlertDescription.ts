"use client";

import React, { forwardRef } from "react";
// Components
import Text from "@components/Text";
// Utils
import { cx } from "@utils";
// Props
import { AlertDescriptionProps } from "./AlertDescription.props";

const AlertDescription = forwardRef<HTMLSpanElement, AlertDescriptionProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Text
        maw="xl"
        cl="inherit"
        className={cx("PrismaneAlertDescription-root", className)}
        data-testid="prismane-alert-description"
        ref={ref}
        {...props}
      >
        {children}
      </Text>
    );
  }
);

export default AlertDescription;
