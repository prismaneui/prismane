import { FC } from "react";
import { useForm } from "react-hook-form";
// Context
import { FormContext } from "../../context";
// Types
import { PrismaneComponent } from "../../types";
// Utils
import { strip } from "../../utils/internal";

export interface FormProps extends PrismaneComponent {
  submit: any;
  initial?: any;
}

/**
 * Form Params
 * @param {Object} props
 * @param {any} props.children The children of the form
 * @param {any} props.submit The submit function for the onSubmit event
 * @returns Element
 */

const Form: FC<FormProps> = ({
  children,
  submit,
  initial,
  className,
  ...props
}) => {
  const options = useForm({
    mode: "all",
    defaultValues: initial ? initial : {},
  });

  return (
    <form
      className={strip(
        `select-none ${className ? className : ""} PrsmForm-root`
      )}
      onSubmit={options.handleSubmit((values) => submit(values, options))}
      {...props}
    >
      <FormContext.Provider
        value={{
          errors: options.formState.errors,
          ...options,
        }}
      >
        {typeof children === "function" ? children(options) : children}
      </FormContext.Provider>
    </form>
  );
};

export default Form;
