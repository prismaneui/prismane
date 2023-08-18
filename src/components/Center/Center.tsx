import { ForwardedRef, forwardRef } from "react";
// Components
import Flex, { FlexProps } from "../Flex/Flex";
// Types
import { Versatile, PrismaneVersatile } from "../../types";
// Utils
import { strip } from "../../utils";

export type CenterProps = FlexProps;

const Center = forwardRef(
  <E extends Versatile>(
    { children, className, ...props }: PrismaneVersatile<E, CenterProps>,
    ref: ForwardedRef<any>
  ) => {
    return (
      <Flex
        justify="center"
        align="center"
        className={strip(`${className ? className : ""} PrismaneCenter-root`)}
        data-testid="prismane-center"
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

export default Center;
