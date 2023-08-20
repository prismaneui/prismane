import { forwardRef } from "react";
// Components
import Field, { FieldProps } from "../Field/Field";
// Hooks
import { useFieldProps } from "../Field";
// Utils
import { strip } from "../../utils";

export type NativeDateFieldProps = FieldProps;

/**
    NativeDateField component displays a dropdown menu to select an option from a list.
    @param {object} props - The props object of NativeDateField component.
    @param {array} [props.options] - The options to display in the dropdown menu, each object must have value and element keys.
    @param {string} [props.placeholder] - The placeholder text for the NativeDateField.
    @param {boolean} [props.readOnly] - Set to true to make the NativeDateField read-only.
    @param {object} props.error - The error message to display in case of invalid input.
    @param {string} props.size - The size of the NativeDateField component.
    @param {string} [props.className] - The className of the NativeDateField component.
    @param {string} props.label - The label for the NativeDateField component.
    @param {function} [props.onChange] - The callback function to execute when the value of NativeDateField changes.
    @returns {JSX.Element} Returns the NativeDateField component.
    */

const NativeDateField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  NativeDateFieldProps
>(({ label, error, size = "base", className, ...props }, ref) => {
  const [rest, field] = useFieldProps(props);

  return (
    <Field.Wrapper {...rest}>
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
