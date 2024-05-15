import { forwardRef } from "react";
import * as CSS from "csstype";
// Components
import Field, { FieldProps, useFieldProps } from "@components/Field";
// Types
import { PrismaneProps } from "@types";
// Utils
import { strip, fr, variants } from "@/utils";

export type TextareaFieldProps = PrismaneProps<
  { resize?: CSS.Properties["resize"] },
  FieldProps
>;

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
        className={strip(
          `${className ? className : ""} PrismaneTextareaField-root`
        )}
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
