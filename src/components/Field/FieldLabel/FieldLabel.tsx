import { forwardRef } from "react";
// Components
import Text, { TextProps } from "@components/Text";
// Types
import { PrismaneBreakpoints, PrismaneProps } from "@types";
// Utils
import { strip, variants } from "@/utils";

export type FieldLabelProps = PrismaneProps<
  {
    id?: string;
    size?: PrismaneBreakpoints;
  },
  TextProps<"label">
>;

const FieldLabel = forwardRef<HTMLLabelElement, FieldLabelProps>(
  ({ id, size = "base", children, className, sx, ...props }, ref) => {
    return (
      <>
        {children && (
          <Text
            as="label"
            htmlFor={id}
            fs={variants(size, {
              xs: "xs",
              sm: "sm",
              base: "sm",
              md: "base",
              lg: "md",
            })}
            cl={(theme) =>
              theme.mode === "dark" ? ["base", 200] : ["base", 700]
            }
            dp="flex"
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              ...sx,
            }}
            className={strip(
              `${className ? className : ""} PrismaneFieldLabel-root`
            )}
            data-testid="prismane-field-label"
            ref={ref}
            {...props}
          >
            {children}
          </Text>
        )}
      </>
    );
  }
);

export default FieldLabel;
