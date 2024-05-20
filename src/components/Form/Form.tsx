import React, { forwardRef } from "react";
// Components
import Box, { BoxProps } from "@components/Box";
// Utils
import { strip, fr } from "@/utils";

export type FormProps = BoxProps<"form">;

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
          ...sx,
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
