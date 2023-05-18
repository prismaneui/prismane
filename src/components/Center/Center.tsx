import { ForwardedRef, forwardRef } from "react";
// Components
import Flex, { FlexProps } from "../Flex/Flex";
// Types
import { Versatile } from "../../types";
// Utils
import { strip } from "../../utils";

export type CenterProps<E extends Versatile> = FlexProps<E>;

const Center = forwardRef(
  <E extends Versatile>(
    { children, className, ...props }: CenterProps<E>,
    ref: ForwardedRef<any>
  ) => {
    return (
      <Flex
        justify="center"
        align="center"
        className={strip(`${className ? className : ""} PrismaneCenter-root`)}
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

export default Center;
