"use client";

import React, { forwardRef } from "react";
// Components
import Box from "@components/Box";
// Utils
import { cx, fr } from "@utils";
// Props
import { FormProps } from "./Form.props";

const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ children, onSubmit, onReset, className, sx, ...props }, ref) => {
    return (
      <Box
        as="form"
        dp="flex"
        className={cx("PrismaneForm-root", className)}
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
