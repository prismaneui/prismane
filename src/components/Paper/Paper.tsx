import { ForwardedRef, forwardRef } from "react";
// Components
import Flex, { FlexProps } from "../Flex/Flex";
// Types
import { Versatile, PrismaneVersatile } from "../../types";
// Utils
import { strip } from "../../utils";

export type PaperProps = {
  shadow?: boolean;
} & FlexProps;

const Paper = forwardRef(
  <E extends Versatile>(
    { children, className, shadow, ...props }: PrismaneVersatile<E, PaperProps>,
    ref: ForwardedRef<any>
  ) => {
    return (
      <Flex
        direction="column"
        br="md"
        bg={(theme) => (theme.mode === "dark" ? ["base", 800] : "white")}
        of="hidden"
        bsh={shadow && "base"}
        className={strip(`${className ? className : ""} PrismanePaper-root`)}
        data-testid="prismane-paper"
        ref={ref}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

export default Paper;
