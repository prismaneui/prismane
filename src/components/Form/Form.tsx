import { forwardRef } from "react";
// Components
import Box, { BoxProps } from "../Box/Box";
// Types
import { PrismaneProps } from "../../types";
// Utils
import { strip, fr } from "../../utils";

export type FormProps = PrismaneProps<
  {
    onSubmit: any;
    onReset?: any;
  },
  BoxProps<"form">
>;

/**
 * Form Params
 * @param {Object} props
 * @param {any} props.children The children of the form
 * @param {any} props.submit The submit function for the onSubmit event
 * @returns Element
 */

const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ children, onSubmit, onReset, className, sx, ...props }, ref) => {
    return (
      <Box
        as="form"
        dp="flex"
        className={strip(`${className ? className : ""} PrismaneForm-root`)}
        onSubmit={onSubmit}
        onReset={onReset}
        sx={{
          gap: fr(4),
          flexDirection: "column",
        }}
        data-testid="prismane-form"
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

export default Form;
