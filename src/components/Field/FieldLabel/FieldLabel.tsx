"use client";

import React, { forwardRef } from "react";
// Components
import Text from "@components/Text";
// Utils
import { cx, variants } from "@utils";
// Props
import { FieldLabelProps } from "./FieldLabel.props";

const FieldLabel = forwardRef<HTMLLabelElement, FieldLabelProps>(
  ({ id, size = "base", children, className, sx, ...props }, ref) => {
    return (
      <>
        {children && (
          <Text
            as="label"
            htmlFor={id}
            fs={variants(size, {
              xs: "xs",
              sm: "sm",
              base: "sm",
              md: "base",
              lg: "md",
            })}
            cl={(theme) =>
              theme.mode === "dark" ? ["base", 200] : ["base", 700]
            }
            dp="flex"
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              ...sx,
            }}
            className={cx("PrismaneFieldLabel-root", className)}
            data-testid="prismane-field-label"
            ref={ref}
            {...props}
          >
            {children}
          </Text>
        )}
      </>
    );
  }
);

export default FieldLabel;
