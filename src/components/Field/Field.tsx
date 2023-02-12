import { FC } from "react";
import { FieldValues, UseFormRegister, Validate } from "react-hook-form";
// Types
import { PrismaneComponent } from "../../types";

export interface FieldProps extends PrismaneComponent {
  name: string;
  placeholder: string;
  type: string | undefined;
  register: UseFormRegister<FieldValues>;
  validators?: Validate<FieldValues>;
  readOnly?: boolean;
  min?: number;
  max?: number;
}

/**
 * Field Params
 * @param {Object} props
 * @param {string} props.name The name the field will be registered with
 * @param {string} props.placeholder The placeholder of the field
 * @param {string | undefined} props.type The type of the field e.g "text", "password"
 * @param {any} props.register The useForm hook register function
 * @param {any=} props.validators The validator functions of the field
 * @param {any=} props.onFocus The function for the onFocus event
 * @param {any=} props.onBlur The function for the onBlur event
 * @param {any=} props.onChange The function for the onChange event
 * @param {string=} props.className The additional classes for the field
 * @param {boolean=} props.readOnly The boolean for the readOnly property of the field
 * @param {number=} props.min The min length of the field
 * @param {number=} props.max The max length of the field
 * @returns Element
 */

const Field: FC<FieldProps> = ({
  name,
  placeholder,
  type,
  register,
  validators,
  onFocus,
  onBlur,
  className,
  readOnly,
  min,
  max,
  style,
}) => {
  return (
    <input
      id={name}
      placeholder={placeholder}
      type={type}
      className={`text-sm w-full py-2 text-base-800 placeholder:text-base-400 ${
        className ? className : ""
      }`}
      style={style}
      {...register(name, {
        validate: validators,
      })}
      onFocus={onFocus}
      onBlur={onBlur}
      readOnly={readOnly ? true : false}
      minLength={min}
      maxLength={max}
    />
  );
};

export default Field;
