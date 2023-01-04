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

interface SelectProps extends PrismaneComponent {
  name: string;
  options: ReactNode[];
  placeholder: string;
  label: string;
  action?: ReactNode;
  validating?: boolean;
  validators?: any;
}

const Select: FC<SelectProps> = ({
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

  return (
    <div className="flex flex-col relative">
      <FieldWrapper
        errors={errors}
        label={label}
        action={action}
        name={name}
        {...props}
      >
        <Field
          name={name}
          placeholder={placeholder}
          register={register}
          type={"text"}
          validators={validators}
          onFocus={() => {
            setExpanded(true);
          }}
          readOnly={true}
          className="cursor-pointer"
        />
        <CaretDown className="text-gray-400" />
      </FieldWrapper>
      {expanded ? (
        <ScopeHandler
          onEvent={() => {
            setExpanded(false);
          }}
          className="flex !w-full grow absolute top-14 left-0"
        >
          <Dropdown
            items={options?.map((option: ReactNode, index: number) => (
              <div
                className="w-full grow"
                onClick={() => {
                  setValue(name, option, {
                    shouldValidate: true,
                    shouldDirty: true,
                  });

                  setExpanded(false);
                }}
                key={index}
              >
                {option}
              </div>
            ))}
          />
        </ScopeHandler>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Select;
