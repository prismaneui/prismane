import { forwardRef, useRef } from "react";
// Components
import Box from "../../Box/Box";
import Flex, { FlexProps } from "../../Flex/Flex";
import Animation, { AnimationProps } from "../../Animation/Animation";
// Types
import { PrismaneBreakpoints } from "../../../types";
// Utils
import { strip, variants, fr } from "../../../utils";

export type FieldErrorProps = {
  size?: PrismaneBreakpoints;
} & AnimationProps<"div"> &
  FlexProps<"div">;

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
            cl={(theme) =>
              theme.mode === "dark" ? ["red", 700] : ["red", 500]
            }
            className={strip(
              `${className ? className : ""} PrismaneFieldError-root`
            )}
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
