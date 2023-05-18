import { forwardRef } from "react";
// Components
import Text, { TextProps } from "../../Text/Text";
// Types
import { PrismaneActions } from "../../../types";
// Utils
import { strip, variants } from "../../../utils";

export type AlertDescriptionProps = {
  variant: PrismaneActions;
} & TextProps<"span">;

const AlertDescription = forwardRef<HTMLSpanElement, AlertDescriptionProps>(
  ({ variant, children, className, ...props }, ref) => {
    return (
      <Text
        fs="sm"
        maw="xl"
        cl={(theme) =>
          variants(variant, {
            warning: theme.mode === "dark" ? ["copper", 400] : ["copper", 600],
            error: theme.mode === "dark" ? ["red", 400] : ["red", 600],
            success: theme.mode === "dark" ? ["green", 400] : ["green", 600],
            info: theme.mode === "dark" ? ["diamond", 400] : ["diamond", 600],
          })
        }
        className={strip(
          `${
            className ? className : ""
          } PrismaneAlertDescription-${variant} PrismaneAlertDescription-root`
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Text>
    );
  }
);

export default AlertDescription;
