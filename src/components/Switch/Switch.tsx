import { FC, useContext } from "react";
import { Controller } from "react-hook-form";
// Animated
import Animated from "../Animated";
// Context
import { FormContext } from "../../context";
// Types
import { PrismaneComponent } from "../../types";
// Utils
import { strip } from "../../utils/internal";

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

const Switch: FC<SwitchProps> = ({ name, className, ...props }) => {
  const { control } = useContext(FormContext);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, name: fieldName } }) => (
        <label
          className={strip(
            `${
              value
                ? "bg-primary-500 dark:bg-primary-700 hover:bg-primary-600 dark:hover:bg-primary-700 PrsmSwitch-active"
                : "bg-base-300 dark:bg-base-700 hover:bg-base-400 dark:hover:bg-base-600 PrsmSwitch-inactive"
            } flex justify-center items-center transition-colors rounded-2xl h-5 w-10 cursor-pointer relative ${
              className ? className : ""
            } PrsmSwitch-root`
          )}
          htmlFor={fieldName}
          {...props}
        >
          <input
            id={fieldName}
            type="checkbox"
            className="hidden"
            onChange={onChange}
            onBlur={onBlur}
          />
          <Animated
            entry="none"
            className={strip(
              `absolute h-[0.875rem] aspect-square rounded-full bg-white left-[0.1875rem] ${
                value ? "!left-[1.4375rem]" : ""
              } PrsmSwitch-box`
            )}
            transition={{
              type: "spring",
              stiffness: 700,
              damping: 27.5,
            }}
            layout
          ></Animated>
        </label>
      )}
    />
  );
};

export default Switch;
