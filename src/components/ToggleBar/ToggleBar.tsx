import { ReactNode, FC, useContext, useState } from "react";
import { CaretDown } from "phosphor-react";
// Components
import FieldWrapper from "../FieldWrapper";
import Field from "../Field";
import Dropdown from "../Dropdown";
import ScopeHandler from "../ScopeHandler";
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
      className="w-fit !p-0 !gap-0 overflow-hidden"
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
          className={`py-2 px-4 flex items-center justify-center w-full cursor-pointer transition-all hover:bg-primary-500/20 ${
            index !== options.length - 1 ? "border-r border-base-300" : ""
          } ${
            currentValue === option.value
              ? "!bg-primary-500 text-white"
              : "text-base-900"
          }`}
          onClick={() => {
            setValue(name, option.value, {
              shouldValidate: true,
              shouldDirty: true,
            });

            setCurrentValue(option.value);
          }}
          key={index}
        >
          {option.element}
        </div>
      ))}
    </FieldWrapper>
  );
};

export default ToggleBar;
