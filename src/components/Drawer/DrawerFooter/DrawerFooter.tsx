"use client";

import React, { forwardRef } from "react";
// Components
import Flex from "@components/Flex";
// Utils
import { cx, fr } from "@utils";
// Props
import { DrawerFooterProps } from "./DrawerFooter.props";

const DrawerFooter = forwardRef<HTMLDivElement, DrawerFooterProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Flex
        of="hidden"
        w="100%"
        mt="auto"
        pt={fr(6)}
        self="end"
        className={cx("PrismaneDrawerFooter-root", className)}
        data-testid="prismane-drawer-footer"
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

export default DrawerFooter;
