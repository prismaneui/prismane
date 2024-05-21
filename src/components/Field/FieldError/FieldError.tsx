"use client";

import React, { forwardRef } from "react";
// Components
import Flex, { FlexProps } from "@components/Flex";
import Animation, { AnimationProps } from "@components/Animation";
// Types
import { PrismaneBreakpoints, PrismaneProps } from "@types";
// Utils
import { cx, variants, fr } from "@utils";

export type FieldErrorProps = PrismaneProps<
  {
    size?: PrismaneBreakpoints;
  },
  AnimationProps & FlexProps
>;

const FieldError = forwardRef<HTMLDivElement, FieldErrorProps>(
  ({ size = "base", children, className, ...props }, ref) => {
    return (
      <>
        {children && (
          <Animation
            as={Flex}
            gap={fr(2)}
            align="center"
            animation={{
              in: {
                opacity: 1,
                height: children ? fr(6) : 0,
              },
              out: {
                opacity: 0,
                height: 0,
              },
            }}
            fs={variants(size, {
              xs: "xs",
              sm: "sm",
              base: "sm",
              md: "base",
              lg: "md",
            })}
            cl="red"
            className={cx("PrismaneFieldError-root", className)}
            data-testid="prismane-field-error"
            ref={ref}
            {...props}
          >
            {children}
          </Animation>
        )}
      </>
    );
  }
);

export default FieldError;
