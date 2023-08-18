import { forwardRef } from "react";
// Components
import Box, { BoxProps } from "../Box/Box";
// Utils
import { strip, fr } from "../../utils";
// Types
import { PrismaneVersatileWithoutAs } from "../../types";

export type FormProps = {
  onSubmit: any;
  onReset?: any;
} & BoxProps;

/**
 * Form Params
 * @param {Object} props
 * @param {any} props.children The children of the form
 * @param {any} props.submit The submit function for the onSubmit event
 * @returns Element
 */

const Form = forwardRef<
  HTMLFormElement,
  PrismaneVersatileWithoutAs<"form", FormProps>
>(({ children, onSubmit, onReset, className, sx, ...props }, ref) => {
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
});

export default Form;
