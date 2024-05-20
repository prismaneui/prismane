import React, { forwardRef } from "react";
// Components
import Transition, { TransitionProps } from "@components/Transition";
import Flex, { FlexProps } from "@components/Flex";
// Types
import { PrismaneBreakpoints, PrismaneProps } from "@types";
// Utils
import { strip, variants, fr } from "@/utils";

export type FieldAddonProps = PrismaneProps<
  {
    size?: PrismaneBreakpoints;
    position?: "right" | "left";
  },
  TransitionProps & FlexProps
>;

const FieldAddon = forwardRef<HTMLDivElement, FieldAddonProps>(
  (
    { size = "base", position = "right", children, className, sx, ...props },
    ref
  ) => {
    return (
      <Transition
        as={Flex}
        h="100%"
        mr={position === "left" ? fr(2) : undefined}
        ml={position === "right" ? fr(2) : undefined}
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
          ...sx,
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
