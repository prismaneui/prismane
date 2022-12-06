import React, { FC } from "react";
import { useForm } from "react-hook-form";
// Context
import { FormContext } from "../../context";
// Types
import { PrismaneComponent } from "../../types";

export interface FormProps extends PrismaneComponent {
  submit: any;
}

/**
 * Form Params
 * @param {Object} props
 * @param {any} props.children The children of the form
 * @param {any} props.submit The submit function for the onSubmit event
 * @returns Element
 */

const Form: FC<FormProps> = ({ children, submit, className, style }) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    ...options
  } = useForm({
    mode: "all",
  });

  return (
    <form
      className={`select-none ${className ? className : ""}`}
      style={style}
      onSubmit={handleSubmit((values) => submit(values, { ...options }))}
      data-testid="form"
    >
      <FormContext.Provider value={{ register, errors, getValues }}>
        {children}
      </FormContext.Provider>
    </form>
  );
};

export default Form;
