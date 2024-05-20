"use client";

import React, { forwardRef, useState, useEffect } from "react";
// Components
import SelectField, { SelectFieldProps } from "@components/SelectField";
// Hooks
import useDebounce from "@hooks/useDebounce";
// Types
import { PrismaneProps } from "@types";
// Utils
import { strip } from "@/utils";

export type AutocompleteFieldProps = PrismaneProps<
  {
    filter?: (
      value: any,
      item: {
        value: string;
        element: React.ReactNode;
      }
    ) => boolean;
  },
  SelectFieldProps
>;

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
