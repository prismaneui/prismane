"use client";

import React, { forwardRef } from "react";
// Components
import Flex from "@components/Flex";
// Utils
import { cx, fr } from "@utils";
import { FieldWrapperProps } from "./FieldWrapper.props";
// Props

const FieldWrapper = forwardRef<HTMLDivElement, FieldWrapperProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Flex
        w="100%"
        direction="column"
        gap={fr(2)}
        className={cx("PrismaneFieldWrapper-root", className)}
        data-testid="prismane-field-wrapper"
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

export default FieldWrapper;
