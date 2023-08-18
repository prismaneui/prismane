import { forwardRef } from "react";
// Components
import Field, { FieldProps } from "../Field/Field";
// Hooks
import { useFieldProps } from "../Field";
// Utils
import { strip, fr, variants } from "../../utils";
// Types
import { PrismaneVersatileWithoutAs } from "../../types";

export type TextFieldProps = {
  prefix?: string;
  suffix?: string;
} & FieldProps;

/**
    A component for rendering a text input field.
    @param {string} name - The name of the input field.
    @param {string} placeholder - The placeholder text to display in the input field.
    @param {string} label - The label to display above the input field.
    @param {ReactNode} icon - An optional icon to display inside the input field.
    @param {string} size - The size of the input field.
    @param {boolean} validating - A flag indicating whether the input field is currently being validated.
    @param {string} className - An optional CSS class to apply to the root element.
    @param {function} onFocus - An optional function to call when the input field receives focus.
    @param {function} onBlur - An optional function to call when the input field loses focus.
    @param {function} onChange - An optional function to call when the value of the input field changes.
    @param {string} value - The current value of the input field.
    @param {string} error - The error of the input field.
    @param {string} defaultValue - The default value of the input field.
    @param {boolean} readOnly - A flag indicating whether the input field is read-only.
    @returns {JSX.Element} A JSX element representing the TextField component.
    */

const TextField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  PrismaneVersatileWithoutAs<"input", TextFieldProps>
>(
  (
    { label, error, size = "base", prefix, suffix, className, ...props },
    ref
  ) => {
    const [rest, field] = useFieldProps(props);

    return (
      <Field.Wrapper>
        <Field.Label
          size={size}
          htmlFor={field.name}
          className="PrismaneTextField-label"
          {...rest}
        >
          {label}
        </Field.Label>
        <Field
          type="text"
          size={size}
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
        <Field.Error size={size} className="PrismaneTextField-error">
          {error}
        </Field.Error>
      </Field.Wrapper>
    );
  }
);

export default TextField;
