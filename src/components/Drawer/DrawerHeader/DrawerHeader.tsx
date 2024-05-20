"use client";

import React, { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "@components/Flex";
import CloseButton from "@components/CloseButton";
// Context
import { useDrawerContext } from "../DrawerContext";
// Utils
import { strip, fr } from "@/utils";

export type DrawerHeaderProps = FlexProps;

const DrawerHeader = forwardRef<HTMLDivElement, DrawerHeaderProps>(
  ({ children, className, ...props }, ref) => {
    const { onClose, closable } = useDrawerContext();

    return (
      <Flex
        align="center"
        justify="between"
        w="100%"
        mb={fr(3)}
        className={strip(
          `${className ? className : ""} PrismaneDrawerHeader-root`
        )}
        data-testid="prismane-drawer-header"
        ref={ref}
        {...props}
      >
        {children}
        {closable && <CloseButton onClick={onClose} size="base" />}
      </Flex>
    );
  }
);

export default DrawerHeader;
