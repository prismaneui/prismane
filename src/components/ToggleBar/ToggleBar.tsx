import { ReactNode, FC, useContext, useState } from "react";
import { motion } from "framer-motion";
// Components
import FieldWrapper from "../FieldWrapper";
import Field from "../Field";
// Context
import { FormContext } from "../../context";
// Types
import { PrismaneComponent } from "@/types";

interface ToggleBarProps extends PrismaneComponent {
  name: string;
  options: OptionsProps[];
  label: string;
  action?: ReactNode;
  validating?: boolean;
  validators?: any;
  value?: string | number;
  variant: "filled" | "smooth" | "outlined" | "raised";
  border?: boolean;
}

interface OptionsProps {
  element: ReactNode;
  value: string | number;
}

const ToggleBar: FC<ToggleBarProps> = ({
  name,
  label,
  action,
  validators,
  options,
  value,
  variant,
  border,
  className,
  ...props
}) => {
  const { register, errors, setValue, getValues } = useContext(FormContext);

  const [currentValue, setCurrentValue] = useState<ReactNode>(getValues(name));

  return (
    <FieldWrapper
      errors={errors}
      label={label}
      action={action}
      name={name}
      className={`w-fit py-1 px-1 gap-2 overflow-hidden h-10 bg-base-200 ${
        !border ? "border-none" : ""
      } ${className ? className : ""}`}
      {...props}
    >
      <Field
        name={name}
        placeholder={""}
        register={register}
        type={"text"}
        validators={validators}
        className="hidden"
        value={value}
      />
      {options.map((option: OptionsProps, index: number) => (
        <div
          className="h-full px-4 flex items-center justify-center w-full rounded-md cursor-pointer transition-all relative"
          onClick={() => {
            setValue(name, option.value, {
              shouldValidate: true,
              shouldDirty: true,
            });

            setCurrentValue(option.value);
          }}
          key={index}
        >
          <div
            className={`flex z-10 transition-all duration-300 ${
              currentValue === option.value
                ? `${variant === "filled" ? "text-white" : ""} ${
                    variant === "smooth" ? "text-primary-500" : ""
                  } ${variant === "outlined" ? "text-primary-500" : ""} ${
                    variant === "raised" ? "text-primary-500" : ""
                  }`
                : "text-base-700"
            }`}
          >
            {option.element}
          </div>
          {currentValue === option.value && (
            <motion.div
              className={`flex w-full h-full absolute top-0 left-0 rounded-md border-[2px] border-transparent ${
                variant === "filled" ? "bg-primary-500" : ""
              } ${variant === "smooth" ? "bg-primary-200" : ""} ${
                variant === "outlined" ? "!border-primary-500" : ""
              } ${variant === "raised" ? "bg-white shadow-lg" : ""}`}
              layoutId={name}
            ></motion.div>
          )}
        </div>
      ))}
    </FieldWrapper>
  );
};

export default ToggleBar;
