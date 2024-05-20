"use client";

import { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "@components/Flex";
// Utils
import { strip, fr } from "@/utils";

export type FieldWrapperProps = FlexProps;

const FieldWrapper = forwardRef<HTMLDivElement, FieldWrapperProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Flex
        w="100%"
        direction="column"
        gap={fr(2)}
        className={strip(
          `${className ? className : ""} PrismaneFieldWrapper-root`
        )}
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
