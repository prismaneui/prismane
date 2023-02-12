import React, { ReactNode, FC, useContext, useState } from "react";
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

interface SelectFieldProps extends PrismaneComponent {
  name: string;
  options: OptionsProps[];
  placeholder: string;
  label: string;
  action?: ReactNode;
  validating?: boolean;
  validators?: any;
}

interface OptionsProps {
  element: ReactNode;
  value: string;
}

const SelectField: FC<SelectFieldProps> = ({
  name,
  placeholder,
  label,
  action,
  validators,
  options,
  ...props
}) => {
  const { register, errors, setValue } = useContext(FormContext);

  const [expanded, setExpanded] = useState(false);

  const [currentValue, setCurrentValue] = useState<ReactNode>(placeholder);

  return (
    <FieldWrapper
      errors={errors}
      label={label}
      action={action}
      name={name}
      className="!px-0"
      {...props}
    >
      <div className="flex flex-col relative w-full px-4">
        <div className="flex items-center w-full">
          <Field
            name={name}
            placeholder={placeholder}
            register={register}
            type={"text"}
            validators={validators}
            readOnly={true}
            className="cursor-pointer hidden"
          />
          <div
            onClick={() => {
              setExpanded(true);
            }}
            className="text-sm w-full py-2 text-base-400 cursor-pointer"
          >
            {currentValue}
          </div>
          <CaretDown className="text-gray-400" />
        </div>
        {expanded ? (
          <ScopeHandler
            onEvent={() => {
              setExpanded(false);
            }}
            className="flex !w-full grow absolute top-12 left-0"
          >
            <Dropdown
              items={options?.map((option: OptionsProps, index: number) => (
                <div
                  className="w-full grow"
                  onClick={() => {
                    setValue(name, option.value, {
                      shouldValidate: true,
                      shouldDirty: true,
                    });

                    setCurrentValue(
                      <span className="!text-base-800 !text-sm">
                        {option.element}
                      </span>
                    );

                    setExpanded(false);
                  }}
                  key={index}
                >
                  {option.element}
                </div>
              ))}
            />
          </ScopeHandler>
        ) : (
          <></>
        )}
      </div>
    </FieldWrapper>
  );
};

export default SelectField;
