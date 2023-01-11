import { FC, useContext } from "react";
import { Controller } from "react-hook-form";
// Context
import { FormContext } from "../../context";
// Types
import { PrismaneComponent } from "../../types";

export interface RadioProps extends PrismaneComponent {
  name: string;
  value: string;
}

const Radio: FC<RadioProps> = ({ name, value, className, ...props }) => {
  const { control } = useContext(FormContext);

  const uuid = Math.random().toString(16).slice(2);

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value: nameValue, name: fieldName },
      }) => (
        <label
          className={`${
            value === nameValue ? "border-primary-500" : "border-base-400"
          } ${
            value === nameValue
              ? "hover:border-primary-600"
              : "hover:border-base-500"
          } border flex justify-center items-center aspect-square transition-colors rounded-full h-5 w-5 cursor-pointer ${
            className ? className : ""
          }`}
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
          <span
            className={`h-3 w-3 aspect-square rounded-full transition-all ${
              value === nameValue ? "bg-primary-500" : ""
            }`}
          ></span>
        </label>
      )}
    />
  );
};

export default Radio;
