import { useState, FC, useContext } from "react";
import { Controller } from "react-hook-form";
// Context
import { FormContext } from "../../context";
// Types
import { PrismaneComponent } from "../../types";

export interface CheckboxProps extends PrismaneComponent {
  name: string;
}

/**
 * Checkbox Params
 * @param {Object} props
 * @param {string} props.name The name the field will be registered with
 * @returns Element
 */

const Checkbox: FC<CheckboxProps> = ({ name, className, ...props }) => {
  const { control } = useContext(FormContext);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, name: fieldName } }) => (
        <label
          className={`${value ? "border-primary-500" : "border-base-400"} ${
            value ? "hover:border-primary-600" : "hover:border-base-500"
          } border flex justify-center items-center aspect-square transition-colors rounded-sm h-5 w-5 cursor-pointer ${
            className ? className : ""
          }`}
          htmlFor={fieldName}
          {...props}
        >
          <input
            id={fieldName}
            type="checkbox"
            className="hidden"
            onBlur={onBlur}
            onChange={onChange}
          />
          <span
            className={`h-3 w-3 aspect-square rounded-sm transition-all ${
              value ? "bg-primary-500" : ""
            }`}
          ></span>
        </label>
      )}
    />
  );
};

export default Checkbox;
