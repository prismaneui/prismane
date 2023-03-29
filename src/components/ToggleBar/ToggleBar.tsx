import { ReactNode, FC, useContext, useState } from "react";
// Components
import FieldWrapper from "../FieldWrapper";
import Field from "../Field";
// Context
import { FormContext } from "../../context";
// Types
import { PrismaneComponent } from "../../types";

interface ToggleBarProps extends PrismaneComponent {
  name: string;
  options: OptionsProps[];
  label: string;
  action?: ReactNode;
  validators?: any;
  defaultValue?: string | number;
  handleChange?: Function;
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
  defaultValue,
  handleChange,
  className,
  ...props
}) => {
  const { register, errors, setValue, getValues } = useContext(FormContext);

  const [currentValue, setCurrentValue] = useState<ReactNode>(
    defaultValue ? defaultValue : getValues(name)
  );

  return (
    <FieldWrapper
      errors={errors}
      label={label}
      action={action}
      name={name}
      className="w-fit !h-10 !p-0 !gap-0 overflow-hidden group"
      {...props}
    >
      <Field
        name={name}
        placeholder={""}
        register={register}
        type={"text"}
        validators={validators}
        className="hidden"
        defaultValue={defaultValue}
        handleChange={handleChange ? () => {} : undefined}
      />
      {options.map((option: OptionsProps, index: number) => (
        <div
          className={`p-3 !h-full flex items-center justify-center w-full cursor-pointer transition-all hover:bg-primary-100 dark:hover:bg-primary-700/20 text-primary-900 dark:text-white ${
            index !== options.length - 1
              ? "border-r border-base-300 dark:border-base-700 group-hover:border-primary-500 dark:group-hover:border-primary-700"
              : ""
          } ${
            currentValue === option.value
              ? "!bg-primary-200 dark:!bg-primary-700/30"
              : ""
          }`}
          onClick={() => {
            if (!handleChange) {
              setValue(name, option.value, {
                shouldValidate: true,
                shouldDirty: true,
              });
            }

            setCurrentValue(option.value);

            if (handleChange) {
              handleChange(option.value);
            }
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
