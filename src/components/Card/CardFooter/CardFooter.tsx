"use client";

import React, { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "@components/Flex";
// Utils
import { cx, fr } from "@utils";

export type CardFooterProps = FlexProps;

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Flex
        of="hidden"
        w="100%"
        mt={fr(4)}
        className={cx("PrismaneCardFooter-root", className)}
        data-testid="prismane-card-footer"
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

export default CardFooter;
