"use client";

import { FC, useContext, ReactNode, useState, useEffect } from "react";
import { Controller } from "react-hook-form";
// Components
import Animated from "../Animated";
// Context
import { FormContext } from "../../context";
// Types
import { PrismaneComponent } from "../../types";
// Utils
import { generateUUID, strip } from "../../utils/internal";

export interface RadioProps extends PrismaneComponent {
  name: string;
  value: string;
  label?: ReactNode;
}

const Radio: FC<RadioProps> = ({ name, value, label, className, ...props }) => {
  const { control } = useContext(FormContext);

  const [uuid, setUuid] = useState("");

  useEffect(() => {
    setUuid(generateUUID());
  }, []);

  return (
    <div className="flex w-fit items-center gap-3">
      <Controller
        control={control}
        name={name}
        render={({
          field: { onChange, onBlur, value: nameValue, name: fieldName },
        }) => (
          <label
            className={strip(
              `${
                value === nameValue
                  ? "border-primary-500 dark:border-primary-700 hover:border-primary-600 PrsmRadio-active"
                  : "border-base-400 dark:border-base-600 hover:border-base-500 PrsmRadio-inactive"
              } focus:ring-1 border flex justify-center items-center aspect-square transition-colors rounded-full h-5 w-5 cursor-pointer ${
                className ? className : ""
              } PrsmRadio-root`
            )}
            htmlFor={`${fieldName}-${uuid}`}
            {...props}
          >
            <input
              id={`${fieldName}-${uuid}`}
              name={name}
              type="radio"
              className="hidden"
              onBlur={onBlur}
              onChange={onChange}
              value={value}
            />
            <Animated
              className={strip(
                `h-3 w-3 aspect-square rounded-full ${
                  value === nameValue
                    ? "bg-primary-500 dark:bg-primary-600 PrsmRadio-boxActive"
                    : "PrsmRadio-boxInactive"
                } PrsmRadio-box`
              )}
              entry="scaleIn"
              exit="scaleOut"
              alternate={value !== nameValue}
            />
          </label>
        )}
      />
      <div className="flex justify-center items-center w-fit text-base-600 dark:text-base-200">
        {label}
      </div>
    </div>
  );
};

export default Radio;
