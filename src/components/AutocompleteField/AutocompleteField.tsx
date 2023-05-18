import { forwardRef, useState, useEffect } from "react";
// Components
import SelectField, { SelectFieldProps } from "../SelectField/SelectField";
// Utils
import { strip } from "../../utils";

export type AutocompleteFieldProps = {
  filter?: Function;
} & SelectFieldProps;

/**
    AutocompleteField component displays a dropdown menu to select an option from a list.
    @param {object} props - The props object of AutocompleteField component.
    @param {array} [props.options] - The options to display in the dropdown menu, each object must have value and element keys.
    @param {string} [props.placeholder] - The placeholder text for the AutocompleteField.
    @param {boolean} [props.readOnly] - Set to true to make the AutocompleteField read-only.
    @param {object} props.error - The error message to display in case of invalid input.
    @param {string} props.size - The size of the AutocompleteField component.
    @param {string} [props.className] - The className of the AutocompleteField component.
    @param {string} props.label - The label for the AutocompleteField component.
    @param {function} [props.onChange] - The callback function to execute when the value of AutocompleteField changes.
    @returns {JSX.Element} Returns the AutocompleteField component.
    */

const AutocompleteField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  AutocompleteFieldProps
>(({ options, filter, size = "base", className, ...props }, ref) => {
  const [filtered, setFiltered] = useState(options);

  useEffect(() => {
    if (filter) {
      setFiltered(options.filter((item) => filter(props.value, item)));
    } else {
      setFiltered(
        options.filter((item) =>
          item.value.toLowerCase().includes(props.value?.toLowerCase())
        )
      );
    }
  }, [props.value]);

  return (
    <SelectField
      readOnly={false}
      options={filtered}
      size={size}
      className={strip(
        `${className ? className : ""} PrismaneAutocompleteField-root`
      )}
      ref={ref}
      {...props}
    />
  );
});

export default AutocompleteField;
