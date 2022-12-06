import React, { useState, FC, useContext } from "react";
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
  const { register, getValues } = useContext(FormContext);

  /**
   * Toggled State
   * @description Creating a useState variable, so we can toggle the "toggled" style of the component.
   */

  const [toggled, setToggled] = useState(getValues(name));

  return (
    <label
      className={`${toggled ? "bg-primary-500" : "bg-base-400"} ${
        toggled ? "hover:bg-primary-600" : "hover:bg-base-500"
      } flex justify-center items-center transition-colors rounded-2xl h-5 w-10 cursor-pointer relative ${className}`}
      style={style}
      htmlFor={name}
      onClick={() => {
        setToggled(!getValues(name));
      }}
    >
      <input {...register(name)} id={name} type="checkbox" className="hidden" />
      <span
        className={`absolute h-[0.875rem] aspect-square rounded-full bg-white transition-all left-[0.1875rem] ${
          toggled ? "!left-[1.4375rem]" : ""
        }`}
      ></span>
    </label>
  );
};

export default Switch;
