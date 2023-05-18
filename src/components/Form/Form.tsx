import { forwardRef } from "react";
// Components
import Box, { BoxProps } from "../Box/Box";
// Utils
import { strip } from "../../utils";

export type FormProps = {
  onSubmit: any;
  onReset?: any;
} & BoxProps<"form">;

/**
 * Form Params
 * @param {Object} props
 * @param {any} props.children The children of the form
 * @param {any} props.submit The submit function for the onSubmit event
 * @returns Element
 */

const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ children, onSubmit, onReset, className, ...props }, ref) => {
    return (
      <Box
        as="form"
        className={strip(`${className ? className : ""} PrismaneForm-root`)}
        onSubmit={onSubmit}
        onReset={onReset}
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

export default Form;
