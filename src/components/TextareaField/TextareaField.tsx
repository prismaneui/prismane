import { forwardRef } from "react";
// Components
import Field, { FieldProps } from "../Field/Field";
// Hooks
import { useFieldProps } from "../Field";
// Utils
import { strip, fr, variants } from "../../utils";
// Types
import { PrismaneVersatileWithoutAs } from "../../types";

export type TextareaFieldProps = FieldProps;
/**
 * Textarea Params
 * @param {Object} props
 * @param {string} props.name The name the field will be registered with
 * @param {string} props.placeholder The placeholder of the field
 * @param {string | HTMLElement} props.label The label text or element for the label element
 * @param {string | ReactNode=} props.action The label action text or element for the label element
 * @param {any} props.validators The validator functions of the field
 * @param {string=} props.className The additional classes for the text field component
 * @param {any=} props.onFocus The function for the onFocus event
 * @param {any=} props.onChange The function for the onChange event
 * @param {boolean=} props.validating The validating boolean for async validation display
 * @param {number=} props.min The min length of the field
 * @param {number=} props.max The max length of the field
 * @returns Element
 */

const TextareaField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  PrismaneVersatileWithoutAs<"input", TextareaFieldProps>
>(({ label, error, size = "base", className, sx, ...props }, ref) => {
  const [rest, field] = useFieldProps(props);

  return (
    <Field.Wrapper {...rest}>
      <Field.Label
        size={size}
        htmlFor={field.name}
        className="PrismaneTextarea-label"
      >
        {label}
      </Field.Label>
      <Field
        as="textarea"
        mih={variants(size, {
          xs: fr(12),
          sm: fr(14),
          base: fr(16),
          md: fr(18),
          lg: fr(20),
        })}
        align="start"
        sx={{
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
        className={strip(`${className ? className : ""} PrismaneTextarea-root`)}
        data-testid="prismane-textarea-field"
        ref={ref}
        {...field}
      />
      <Field.Error size={size} className="PrismaneTextarea-error">
        {error}
      </Field.Error>
    </Field.Wrapper>
  );
});

export default TextareaField;
