import { forwardRef } from "react";
// Components
import Field, { FieldProps } from "../Field/Field";
import Text from "../Text/Text";
// Hooks
import { useFieldProps } from "../Field";
// Utils
import { strip } from "../../utils";

export type NativeSelectFieldProps = {
  options: { value: string; label: string }[];
} & FieldProps;

/**
    NativeSelectField component displays a dropdown menu to select an option from a list.
    @param {object} props - The props object of NativeSelectField component.
    @param {array} [props.options] - The options to display in the dropdown menu, each object must have value and element keys.
    @param {string} [props.placeholder] - The placeholder text for the NativeSelectField.
    @param {boolean} [props.readOnly] - Set to true to make the NativeSelectField read-only.
    @param {object} props.error - The error message to display in case of invalid input.
    @param {string} props.size - The size of the NativeSelectField component.
    @param {string} [props.className] - The className of the NativeSelectField component.
    @param {string} props.label - The label for the NativeSelectField component.
    @param {function} [props.onChange] - The callback function to execute when the value of NativeSelectField changes.
    @returns {JSX.Element} Returns the NativeSelectField component.
    */

const NativeSelectField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  NativeSelectFieldProps
>(({ options, label, error, size = "base", className, ...props }, ref) => {
  const [rest, field] = useFieldProps(props);

  return (
    <Field.Wrapper {...rest}>
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
        className={strip(
          `${className ? className : ""} PrismaneNativeSelectField-root`
        )}
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
