import React, { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "@components/Flex";
// Utils
import { strip, fr } from "@/utils";

export type CardFooterProps = FlexProps;

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Flex
        of="hidden"
        w="100%"
        mt={fr(4)}
        className={strip(
          `${className ? className : ""} PrismaneCardFooter-root`
        )}
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
