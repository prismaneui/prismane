"use client";

import React, { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "@components/Flex";
// Utils
import { cx, fr } from "@utils";

export type ModalFooterProps = FlexProps;

const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Flex
        of="hidden"
        w="100%"
        mt={fr(6)}
        className={cx("PrismaneModalFooter-root", className)}
        data-testid="prismane-modal-footer"
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

export default ModalFooter;
