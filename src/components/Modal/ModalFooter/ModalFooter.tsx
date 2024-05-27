"use client";

import React, { forwardRef } from "react";
// Components
import Flex from "@components/Flex";
// Utils
import { cx, fr } from "@utils";
// Props
import { ModalFooterProps } from "./ModalFooter.props";

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
