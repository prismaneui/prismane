import { forwardRef } from "react";
import { FieldValues, UseFormRegister, Validate } from "react-hook-form";
// Types
import { PrismaneComponent } from "../../types";
// Utils
import { strip } from "../../utils/internal";

export interface FieldProps extends PrismaneComponent {
  name: string;
  placeholder: string;
  type: string | undefined;
  register: UseFormRegister<FieldValues>;
  validators?: Validate<FieldValues>;
  readOnly?: boolean;
  min?: number;
  max?: number;
  value?: string | number;
  defaultValue?: string | number;
  handleChange?: Function;
  textarea?: boolean;
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

const Field = forwardRef<
  HTMLInputElement | HTMLTextAreaElement | any,
  FieldProps
>(
  (
    {
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
      value,
      defaultValue,
      handleChange,
      textarea,
      ...props
    },
    ref
  ) => {
    const initial = {
      id: name,
      placeholder: placeholder,
      type: type,
      className: strip(
        `text-sm w-full py-2 text-base-800 dark:text-base-300 placeholder:text-base-400 dark:placeholder:text-base-300 resize-none ${
          textarea ? "h-20" : ""
        } ${className ? className : ""} PrsmField-root`
      ),
      onFocus: onFocus,
      onBlur: onBlur,
      readOnly: readOnly,
      minLength: min,
      maxLength: max,
      value: value,
      defaultValue: defaultValue,
    };

    const additional = !handleChange
      ? {
          ...register(name, {
            validate: validators,
          }),
        }
      : {
          onChange: (e: any) => {
            handleChange(e.target.value);
          },
          ref,
        };

    return !textarea ? (
      <input {...initial} {...additional} {...props} />
    ) : (
      <textarea {...initial} {...additional} {...props} />
    );
  }
);

export default Field;
