"use client";

import React, { forwardRef } from "react";

// Components
import Field, { useFieldProps } from "@components/Field";
// Utils
import { cx, fr, variants } from "@utils";
// Props
import { TextareaFieldProps } from "./TextareaField.props";

const TextareaField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  TextareaFieldProps
>(({ resize, label, error, size = "base", className, sx, ...props }, ref) => {
  const [rest, field] = useFieldProps(props);

  return (
    <Field.Wrapper pe={(field.disabled || field.readOnly) && "none"} {...rest}>
      <Field.Label
        size={size as any}
        htmlFor={field.name}
        className="PrismaneTextareaField-label"
      >
        {label}
      </Field.Label>
      <Field
        as="textarea"
        size={size as any}
        mih={variants(size, {
          xs: fr(12),
          sm: fr(14),
          base: fr(16),
          md: fr(18),
          lg: fr(20),
        })}
        align="start"
        sx={{
          resize,
          ".PrismaneField-field": {
            resize: "none",
            fontSize: variants(size, {
              xs: fr(3),
              sm: fr(3.5),
              base: fr(3.5),
              md: fr(4),
              lg: fr(4.5),
            }),
          },
          textarea: {
            fontSize: variants(size, {
              xs: "xs",
              sm: "sm",
              base: "sm",
              md: "base",
              lg: "md",
            }),
          },
          ...sx,
        }}
        className={cx("PrismaneTextareaField-root", className)}
        data-testid="prismane-textarea-field"
        ref={ref}
        {...field}
      />
      <Field.Error size={size as any} className="PrismaneTextareaField-error">
        {error}
      </Field.Error>
    </Field.Wrapper>
  );
});

export default TextareaField;
