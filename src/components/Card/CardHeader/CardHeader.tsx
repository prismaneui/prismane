"use client";

import React, { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "@components/Flex";
// Utils
import { cx, fr } from "@utils";

export type CardHeaderProps = FlexProps;

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Flex
        of="hidden"
        w="100%"
        mb={fr(2)}
        className={cx("PrismaneCardHeader-root", className)}
        data-testid="prismane-card-header"
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

export default CardHeader;
