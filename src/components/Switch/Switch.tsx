import { FC, useContext } from "react";
import { Controller } from "react-hook-form";
// Context
import { FormContext } from "../../context";
// Types
import { PrismaneComponent } from "../../types";

export interface SwitchProps extends PrismaneComponent {
  name: string;
}

/**
 * Switch Params
 * @param {Object} props
 * @param {string} props.name The name the field will be registered with
 * @param {any} props.register The useForm hook register function
 * @param {any} props.getValues The useForm hook getValue function to toggle the "toggled" style of the component
 * @returns Element
 */

const Switch: FC<SwitchProps> = ({ name, className, style }) => {
  const { control } = useContext(FormContext);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, name: fieldName } }) => (
        <label
          className={`${value ? "bg-primary-500" : "bg-base-400"} ${
            value ? "hover:bg-primary-600" : "hover:bg-base-500"
          } flex justify-center items-center transition-colors rounded-2xl h-5 w-10 cursor-pointer relative ${
            className ? className : ""
          }`}
          style={style}
          htmlFor={fieldName}
        >
          <input
            id={fieldName}
            type="checkbox"
            className="hidden"
            onChange={onChange}
            onBlur={onBlur}
          />
          <span
            className={`absolute h-[0.875rem] aspect-square rounded-full bg-white transition-all left-[0.1875rem] ${
              value ? "!left-[1.4375rem]" : ""
            }`}
          ></span>
        </label>
      )}
    />
  );
};

export default Switch;
