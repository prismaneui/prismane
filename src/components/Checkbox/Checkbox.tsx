import { FC, useContext } from "react";
import { Controller } from "react-hook-form";
import { motion } from "framer-motion";
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

  const spring = {
    type: "spring",
    stiffness: 1000,
    damping: 32.5,
  };

  const variants = {
    active: { scale: 1 },
    inactive: { scale: 0 },
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, name: fieldName } }) => (
        <label
          className={`${value ? "border-primary-500" : "border-base-400"} ${
            value ? "hover:border-primary-600" : "hover:border-base-500"
          } border flex justify-center items-center aspect-square transition-colors rounded h-5 w-5 cursor-pointer ${
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
          <motion.div
            className={`h-3 w-3 aspect-square rounded-sm ${
              value ? "bg-primary-500" : ""
            }`}
            transition={spring}
            animate={value ? "active" : "inactive"}
            variants={variants}
          ></motion.div>
        </label>
      )}
    />
  );
};

export default Checkbox;
