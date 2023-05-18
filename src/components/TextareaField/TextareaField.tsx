import { forwardRef } from "react";
// Components
import Field, { FieldProps } from "../Field/Field";
// Hooks
import { useFieldProps } from "../Field";
// Utils
import { strip, fr } from "../../utils";

export type TextareaFieldProps = FieldProps<"input">;
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
  TextareaFieldProps
>(({ label, error, size = "base", className, sx, ...props }, ref) => {
  const [rest, field] = useFieldProps(props);

  return (
    <Field.Wrapper {...rest}>
      <Field.Label size={size}>{label}</Field.Label>
      <Field
        as="textarea"
        mih={fr(16)}
        align="start"
        sx={{
          ".PrismaneField-field": {
            resize: "none",
          },
          ...sx,
        }}
        className={strip(`${className ? className : ""} PrismaneTextarea-root`)}
        ref={ref}
        {...field}
      />
      <Field.Error size={size}>{error}</Field.Error>
    </Field.Wrapper>
  );
});

export default TextareaField;
