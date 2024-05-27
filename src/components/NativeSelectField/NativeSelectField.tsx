"use client";

import React, { forwardRef } from "react";
// Components
import Field, { useFieldProps } from "@components/Field";
import Text from "@components/Text";
// Utils
import { cx } from "@utils";
// Props
import { NativeSelectFieldProps } from "./NativeSelectField.props";

const NativeSelectField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  NativeSelectFieldProps
>(({ options, label, error, size = "base", className, ...props }, ref) => {
  const [rest, field] = useFieldProps(props);

  return (
    <Field.Wrapper pe={(field.disabled || field.readOnly) && "none"} {...rest}>
      <Field.Label
        size={size as any}
        htmlFor={field.name}
        className="PrismaneNativeSelectField-label"
      >
        {label}
      </Field.Label>
      <Field
        as="select"
        py={0}
        size={size as any}
        error={error}
        className={cx("PrismaneNativeSelectField-root", className)}
        data-testid="prismane-native-select-field"
        ref={ref}
        {...field}
      >
        {options.map((option, index) => (
          <Text
            as="option"
            bg={(theme) =>
              theme.mode === "dark" ? ["base", 700] : ["base", 200]
            }
            cl={(theme) =>
              theme.mode === "dark" ? ["base", 200] : ["base", 700]
            }
            value={option.value}
            key={index}
          >
            {option.label}
          </Text>
        ))}
      </Field>
      <Field.Error
        size={size as any}
        className="PrismaneNativeSelectField-error"
      >
        {error}
      </Field.Error>
    </Field.Wrapper>
  );
});

export default NativeSelectField;
