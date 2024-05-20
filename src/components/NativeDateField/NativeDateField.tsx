"use client";

import { forwardRef } from "react";
// Components
import Field, { FieldProps, useFieldProps } from "@components/Field";
// Utils
import { strip } from "@/utils";

export type NativeDateFieldProps = FieldProps;

const NativeDateField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  NativeDateFieldProps
>(({ label, error, size = "base", className, ...props }, ref) => {
  const [rest, field] = useFieldProps(props);

  return (
    <Field.Wrapper pe={(field.disabled || field.readOnly) && "none"} {...rest}>
      <Field.Label
        size={size as any}
        htmlFor={field.name}
        className="PrismaneNativeDateField-label"
      >
        {label}
      </Field.Label>
      <Field
        type="date"
        py={0}
        size={size as any}
        error={error}
        className={strip(
          `${className ? className : ""} PrismaneNativeDateField-root`
        )}
        data-testid="prismane-native-date-field"
        ref={ref}
        {...field}
      />
      <Field.Error size={size as any} className="PrismaneNativeDateField-error">
        {error}
      </Field.Error>
    </Field.Wrapper>
  );
});

export default NativeDateField;
