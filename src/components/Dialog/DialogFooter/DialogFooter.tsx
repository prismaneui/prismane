"use client";

import { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "@components/Flex";
// Utils
import { strip, fr } from "@/utils";

export type DialogFooterProps = FlexProps;

const DialogFooter = forwardRef<HTMLDivElement, DialogFooterProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Flex
        of="hidden"
        w="100%"
        mt={fr(4)}
        className={strip(
          `${className ? className : ""} PrismaneDialogFooter-root`
        )}
        data-testid="prismane-dialog-footer"
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

export default DialogFooter;
