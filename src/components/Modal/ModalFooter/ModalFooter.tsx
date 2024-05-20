"use client";

import { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "@components/Flex";
// Utils
import { strip, fr } from "@/utils";

export type ModalFooterProps = FlexProps;

const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Flex
        of="hidden"
        w="100%"
        mt={fr(6)}
        className={strip(
          `${className ? className : ""} PrismaneModalFooter-root`
        )}
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
