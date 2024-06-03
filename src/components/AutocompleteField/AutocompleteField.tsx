"use client";

import React, { forwardRef, useState, useEffect } from "react";
// Components
import SelectField from "@components/SelectField";
// Hooks
import useDebounce from "@hooks/useDebounce";
// Utils
import { cx } from "@utils";
// Props
import { AutocompleteFieldProps } from "./AutocompleteField.props";

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
      className={cx("PrismaneAutocompleteField-root", className)}
      data-testid="prismane-autocomplete-field"
      ref={ref}
      {...props}
    />
  );
});

export default AutocompleteField;
