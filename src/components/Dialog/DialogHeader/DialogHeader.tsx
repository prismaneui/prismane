import React, { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "@components/Flex";
import CloseButton from "@components/CloseButton";
// Context
import { useDialogContext } from "../DialogContext";
// Utils
import { strip, fr } from "@/utils";

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
        className={strip(
          `${className ? className : ""} PrismaneDialogHeader-root`
        )}
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
