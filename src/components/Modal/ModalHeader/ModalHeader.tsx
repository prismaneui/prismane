"use client";

import React, { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "@components/Flex";
import CloseButton from "@components/CloseButton";
// Context
import { useModalContext } from "../ModalContext";
// Utils
import { cx, fr } from "@utils";

export type ModalHeaderProps = FlexProps;

const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ children, className, ...props }, ref) => {
    const { closable, onClose } = useModalContext();

    return (
      <Flex
        align="center"
        justify="between"
        w="100%"
        mb={fr(3)}
        className={cx("PrismaneModalHeader-root", className)}
        data-testid="prismane-modal-header"
        ref={ref}
        {...props}
      >
        {children}
        {closable && <CloseButton onClick={onClose} />}
      </Flex>
    );
  }
);

export default ModalHeader;
