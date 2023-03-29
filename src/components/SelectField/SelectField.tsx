import {
  ReactNode,
  useContext,
  useState,
  useRef,
  forwardRef,
  useEffect,
} from "react";
import { CaretDown, MagnifyingGlass } from "phosphor-react";
// Components
import FieldWrapper from "../FieldWrapper";
import Field from "../Field";
import Dropdown from "../Dropdown";
import ScopeHandler from "../ScopeHandler";
import TextField from "../TextField";
// Context
import { FormContext } from "../../context";
// Types
import { PrismaneComponent } from "../../types";

interface SelectFieldProps extends PrismaneComponent {
  name: string;
  options: OptionsProps[];
  placeholder: string;
  label: string;
  icon?: ReactNode;
  action?: ReactNode;
  validating?: boolean;
  validators?: any;
  value?: string | number;
  defaultValue?: string | number;
  search?: boolean;
  readOnly?: boolean;
  disableSpacing?: boolean;
  empty?: ReactNode;
  handleChange?: Function;
}

interface OptionsProps {
  element: ReactNode;
  value: string;
}

const SelectField = forwardRef<HTMLInputElement, SelectFieldProps>(
  (
    {
      name,
      placeholder,
      label,
      icon,
      action,
      validators,
      options,
      value,
      search,
      defaultValue,
      readOnly,
      disableSpacing,
      empty,
      handleChange,
      className,
      ...props
    },
    ref
  ) => {
    const { register, errors, setValue } = useContext(FormContext);

    const [expanded, setExpanded] = useState(false);

    const [currentValue, setCurrentValue] = useState<ReactNode>(
      defaultValue ? (
        <span className="!text-base-800 dark:!text-base-300 !text-sm">
          {
            options.filter((option: any) => option.value === defaultValue)[0]
              .element
          }
        </span>
      ) : (
        placeholder
      )
    );

    const [currentOptions, setCurrentOptions] = useState(options);

    const searchRef: any = useRef(null);

    useEffect(() => {
      if (expanded && searchRef.current) {
        searchRef.current.focus();
      }
    }, [expanded]);

    const close = () => {
      setExpanded(false);
      setCurrentOptions(options);
    };

    return (
      <FieldWrapper
        errors={errors}
        label={label}
        icon={icon}
        action={action}
        name={name}
        disableSpacing={disableSpacing}
        {...props}
        className={`relative ${className ? className : ""}`}
      >
        <div className="flex flex-col w-full">
          <div className="flex items-center w-full PrsmSelectField-root">
            <Field
              name={name}
              placeholder={placeholder}
              register={register}
              type={"text"}
              validators={validators}
              readOnly={true}
              className="cursor-pointer hidden"
              value={value}
              ref={ref}
              defaultValue={defaultValue}
              handleChange={handleChange ? () => {} : undefined}
            />
            <div
              onClick={() => {
                setExpanded(true);
              }}
              className="text-sm w-full py-2 text-base-400 cursor-pointer PrsmSelectField-box"
            >
              {currentValue}
            </div>
            {!errors[name] && <CaretDown className="text-gray-400" />}
          </div>
          {expanded ? (
            <ScopeHandler
              onEvent={() => {
                close();
              }}
              className="flex flex-col !w-full grow absolute top-12 left-0"
            >
              <Dropdown
                search={search}
                items={currentOptions?.map(
                  (option: OptionsProps, index: number) => (
                    <div
                      className="w-full"
                      onClick={() => {
                        if (!handleChange) {
                          setValue(name, option.value, {
                            shouldValidate: true,
                            shouldDirty: true,
                          });
                        }

                        setCurrentValue(
                          <span className="!text-base-800 dark:!text-base-300 !text-sm">
                            {option.element}
                          </span>
                        );

                        if (handleChange) {
                          handleChange(option.value);
                        }

                        close();
                      }}
                      key={index}
                    >
                      {option.element}
                    </div>
                  )
                )}
                empty={
                  empty ? (
                    empty
                  ) : (
                    <span className="text-sm text-center PrsmSelectField-emptySearch">
                      No items found!
                    </span>
                  )
                }
              >
                {search && (
                  <TextField
                    name=""
                    label=""
                    placeholder="Search"
                    icon={<MagnifyingGlass />}
                    handleChange={(v: any) => {
                      setCurrentOptions(
                        options.filter((option) =>
                          option.value.toLowerCase().includes(v.toLowerCase())
                        )
                      );
                    }}
                    ref={searchRef}
                    disableSpacing
                  />
                )}
              </Dropdown>
            </ScopeHandler>
          ) : (
            <></>
          )}
        </div>
      </FieldWrapper>
    );
  }
);

export default SelectField;
