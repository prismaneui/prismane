import { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "../Flex/Flex";
// Types
import {
  Versatile,
  PrismaneVersatile,
  PrismaneVersatileRef,
  PrismaneProps,
} from "../../types";
// Utils
import { strip } from "../../utils";

export type PaperProps<E extends Versatile = "div"> = PrismaneVersatile<
  E,
  PrismaneProps<
    {
      shadow?: boolean;
    },
    FlexProps
  >
>;

type PaperComponent = <E extends Versatile = "div">(
  props: PaperProps<E>
) => any;

const Paper: PaperComponent = forwardRef(
  <E extends Versatile = "div">(
    { as, children, className, shadow, ...props }: PaperProps<E>,
    ref: PrismaneVersatileRef<E>
  ) => {
    const Component = as || "div";

    return (
      <Flex
        as={Component}
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
