import { forwardRef } from "react";
// Components
import Transition, { TransitionProps } from "../../Transition/Transition";
import Flex, { FlexProps } from "../../Flex/Flex";
// Types
import { PrismaneBreakpoints } from "../../../types";
// Utils
import { strip, variants, fr } from "../../../utils";

export type FieldAddonProps = {
  size?: PrismaneBreakpoints;
  position?: "right" | "left";
} & TransitionProps<"div"> &
  FlexProps<"div">;

const FieldAddon = forwardRef<HTMLDivElement, FieldAddonProps>(
  (
    { size = "base", position = "right", children, className, sx, ...props },
    ref
  ) => {
    return (
      <Transition
        as={Flex}
        h="100%"
        mr={position === "left" && fr(2)}
        ml={position === "right" && fr(2)}
        fs={variants(size, {
          xs: "xs",
          sm: "sm",
          base: "sm",
          md: "base",
          lg: "md",
        })}
        align="center"
        justify="center"
        className={strip(
          `${className ? className : ""} PrismaneFieldAddon-root`
        )}
        sx={{
          order: position === "right" ? 1 : -1,
        }}
        data-testid="prismane-field-addon"
        ref={ref}
        {...props}
      >
        {children}
      </Transition>
    );
  }
);

export default FieldAddon;
