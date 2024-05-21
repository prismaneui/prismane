"use client";

import React, { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "@components/Flex";
// Utils
import { cx, fr } from "@utils";

export type DialogFooterProps = FlexProps;

const DialogFooter = forwardRef<HTMLDivElement, DialogFooterProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Flex
        of="hidden"
        w="100%"
        mt={fr(4)}
        className={cx("PrismaneDialogFooter-root", className)}
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
