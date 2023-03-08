import { FC, useContext } from "react";
import { Controller } from "react-hook-form";
import { motion } from "framer-motion";
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

const Switch: FC<SwitchProps> = ({ name, className, ...props }) => {
  const { control } = useContext(FormContext);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 27.5,
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, name: fieldName } }) => (
        <label
          className={`${value ? "bg-primary-500" : "bg-base-300"} ${
            value ? "hover:bg-primary-600" : "hover:bg-base-400"
          } flex justify-center items-center transition-colors rounded-2xl h-5 w-10 cursor-pointer relative ${
            className ? className : ""
          }`}
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
          <motion.div
            className={`absolute h-[0.875rem] aspect-square rounded-full bg-white left-[0.1875rem] ${
              value ? "!left-[1.4375rem]" : ""
            }`}
            transition={spring}
            layout
          ></motion.div>
        </label>
      )}
    />
  );
};

export default Switch;
