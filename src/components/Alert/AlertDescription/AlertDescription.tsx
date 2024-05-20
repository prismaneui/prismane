"use client";

import React, { forwardRef } from "react";
// Components
import Text, { TextProps } from "@components/Text";
// Utils
import { strip } from "@/utils";

export type AlertDescriptionProps = TextProps;

const AlertDescription = forwardRef<HTMLSpanElement, AlertDescriptionProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Text
        maw="xl"
        cl="inherit"
        className={strip(
          `${className ? className : ""} PrismaneAlertDescription-root`
        )}
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
