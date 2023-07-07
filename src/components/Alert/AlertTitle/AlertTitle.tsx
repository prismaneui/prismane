import { forwardRef } from "react";
// Components
import Text, { TextProps } from "../../Text/Text";
// Types
import { PrismaneComponent, PrismaneActions } from "../../../types";
// Utils
import { strip, variants } from "../../../utils";

export type AlertTitleProps = {
  variant: PrismaneActions;
} & TextProps<"span">;

const AlertTitle = forwardRef<HTMLSpanElement, AlertTitleProps>(
  ({ variant, children, className, ...props }, ref) => {
    return (
      <Text
        w="100%"
        fw="bold"
        cl={(theme) =>
          variants(variant, {
            warning: theme.mode === "dark" ? ["copper", 500] : ["copper", 700],
            error: theme.mode === "dark" ? ["red", 500] : ["red", 700],
            success: theme.mode === "dark" ? ["green", 500] : ["green", 700],
            info: theme.mode === "dark" ? ["diamond", 500] : ["diamond", 700],
          })
        }
        className={strip(
          `${
            className ? className : ""
          } PrismaneAlertTitle-${variant} PrismaneAlertTitle-root`
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Text>
    );
  }
);

export default AlertTitle;
