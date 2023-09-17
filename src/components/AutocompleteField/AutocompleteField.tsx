import { forwardRef, useState, useEffect } from "react";
// Components
import SelectField, { SelectFieldProps } from "../SelectField/SelectField";
// Hooks
import useDebounce from "../../hooks/useDebounce";
// Types
import { PrismaneProps } from "../../types";
// Utils
import { strip } from "../../utils";

export type AutocompleteFieldProps = PrismaneProps<
  {
    filter?: Function;
  },
  SelectFieldProps
>;

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
>(({ options, filter, className, ...props }, ref) => {
  const [filtered, setFiltered] = useState(options);

  const debouncedValue = useDebounce(props.value, 250);

  useEffect(() => {
    if (filter) {
      setFiltered(options.filter((item) => filter(debouncedValue, item)));
    } else {
      setFiltered(
        options.filter((item) =>
          item.value
            .toString()
            .toLowerCase()
            .includes(debouncedValue?.toLowerCase())
        )
      );
    }
  }, [debouncedValue]);

  return (
    <SelectField
      readOnly={false}
      options={filtered}
      className={strip(
        `${className ? className : ""} PrismaneAutocompleteField-root`
      )}
      data-testid="prismane-autocomplete-field"
      ref={ref}
      {...props}
    />
  );
});

export default AutocompleteField;
