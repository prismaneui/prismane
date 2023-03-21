"use client";

import { FC, useContext, ReactNode } from "react";
import { Controller } from "react-hook-form";
// Animated
import Animated from "../Animated";
// Context
import { FormContext } from "../../context";
// Types
import { PrismaneComponent } from "../../types";
// Utils
import { strip } from "../../utils/internal";

export interface CheckboxProps extends PrismaneComponent {
  name: string;
  label?: ReactNode;
}

/**
 * Checkbox Params
 * @param {Object} props
 * @param {string} props.name The name the field will be registered with
 * @returns Element
 */

const Checkbox: FC<CheckboxProps> = ({ name, label, className, ...props }) => {
  const { control } = useContext(FormContext);

  return (
    <div className="flex w-fit items-center gap-2">
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value, name: fieldName } }) => (
          <label
            className={strip(
              `${
                value
                  ? "border-primary-500 dark:border-primary-700 hover:border-primary-600 PrsmCheckbox-active"
                  : "border-base-400 dark:border-base-600 hover:border-base-500 PrsmCheckbox-inactive"
              } border flex justify-center items-center aspect-square transition-colors rounded h-5 w-5 cursor-pointer ${
                className ? className : ""
              } PrsmCheckbox-root`
            )}
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
            <Animated
              className="h-3 w-3 aspect-square rounded-sm bg-primary-500 dark:bg-primary-600 PrsmCheckbox-box"
              entry="scaleIn"
              exit="scaleOut"
              alternate={!value}
            ></Animated>
          </label>
        )}
      />
      <div className="flex justify-center items-center w-fit text-base-600 dark:text-base-200">
        {label}
      </div>
    </div>
  );
};

export default Checkbox;
