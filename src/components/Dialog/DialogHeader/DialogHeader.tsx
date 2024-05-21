"use client";

import React, { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "@components/Flex";
import CloseButton from "@components/CloseButton";
// Context
import { useDialogContext } from "../DialogContext";
// Utils
import { cx, fr } from "@utils";

export type DialogHeaderProps = FlexProps;

const DialogHeader = forwardRef<HTMLDivElement, DialogHeaderProps>(
  ({ children, className, ...props }, ref) => {
    const { closable, onClose } = useDialogContext();

    return (
      <Flex
        align="center"
        justify="between"
        w="100%"
        mb={fr(2)}
        className={cx("PrismaneDialogHeader-root", className)}
        data-testid="prismane-dialog-header"
        ref={ref}
        {...props}
      >
        {children}
        {closable && <CloseButton onClick={onClose} />}
      </Flex>
    );
  }
);

export default DialogHeader;
