import { forwardRef } from "react";
// Components
import Field, { FieldProps, useFieldProps } from "@components/Field";
// Types
import { PrismaneProps } from "@/types";
// Utils
import { strip, fr, variants } from "@/utils";

export type TextFieldProps = PrismaneProps<
  {
    prefix?: string;
    suffix?: string;
  },
  FieldProps
>;

const TextField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  TextFieldProps
>(
  (
    { label, error, size = "base", prefix, suffix, className, ...props },
    ref
  ) => {
    const [rest, field] = useFieldProps(props);

    return (
      <Field.Wrapper {...rest}>
        <Field.Label
          size={size as any}
          htmlFor={field.name}
          className="PrismaneTextField-label"
        >
          {label}
        </Field.Label>
        <Field
          type="text"
          size={size as any}
          error={error}
          pr={suffix && "0"}
          pl={prefix && "0"}
          py={(prefix || suffix) && "0"}
          className={strip(
            `${className ? className : ""} PrismaneTextField-root`
          )}
          addons={
            <>
              {prefix && (
                <Field.Addon
                  position="left"
                  bg={(theme) =>
                    theme.mode === "dark" ? ["base", 700] : ["base", 200]
                  }
                  bdrw={1}
                  bdc={(theme) =>
                    theme.mode === "dark" ? ["base", 600] : ["base", 300]
                  }
                  fs={variants(size, {
                    xs: "xs",
                    sm: "sm",
                    base: "sm",
                    md: "base",
                    lg: "md",
                  })}
                  px={variants(size, {
                    xs: fr(2),
                    sm: fr(3),
                    base: fr(4),
                    md: fr(5),
                    lg: fr(6),
                  })}
                  sx={{
                    order: 1,
                  }}
                >
                  {prefix}
                </Field.Addon>
              )}
              {suffix && (
                <Field.Addon
                  h="100%"
                  bg={(theme) =>
                    theme.mode === "dark" ? ["base", 700] : ["base", 200]
                  }
                  bdlw={1}
                  bdc={(theme) =>
                    theme.mode === "dark" ? ["base", 600] : ["base", 300]
                  }
                  fs={variants(size, {
                    xs: "xs",
                    sm: "sm",
                    base: "sm",
                    md: "base",
                    lg: "md",
                  })}
                  px={variants(size, {
                    xs: fr(2),
                    sm: fr(3),
                    base: fr(4),
                    md: fr(5),
                    lg: fr(6),
                  })}
                  sx={{
                    order: 3,
                  }}
                >
                  {suffix}
                </Field.Addon>
              )}
            </>
          }
          data-testid="prismane-text-field"
          ref={ref}
          {...field}
        />
        <Field.Error size={size as any} className="PrismaneTextField-error">
          {error}
        </Field.Error>
      </Field.Wrapper>
    );
  }
);

export default TextField;
