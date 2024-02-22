import { useState, forwardRef } from "react";
import { Eye, EyeClosed } from "@phosphor-icons/react";
// Components
import Field, { FieldProps } from "../Field/Field";
import Icon from "../Icon/Icon";
import Transition from "../Transition/Transition";
// Hooks
import { useFieldProps } from "../Field";
// Utils
import { strip, variants, fr } from "../../utils";

export type PasswordFieldProps = FieldProps;

const PasswordField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  PasswordFieldProps
>(({ label, error, size = "base", ...props }, ref) => {
  const [rest, field] = useFieldProps(props);

  const [mutableType, setMutableType] = useState("password");

  return (
    <Field.Wrapper {...rest}>
      <Field.Label
        size={size as any}
        htmlFor={field.name}
        className="PrismanePasswordField-label"
      >
        {label}
      </Field.Label>
      <Field
        size={size as any}
        error={error}
        type={mutableType}
        py="0"
        addons={
          <Field.Addon>
            <Transition
              as={Icon}
              size={variants(size, {
                xs: fr(4),
                sm: fr(4.5),
                base: fr(5),
                md: fr(6),
                lg: fr(7.5),
              })}
              cl={[["base", 500], { hover: ["primary", 500] }]}
              sx={{
                cursor: "pointer",
              }}
              onClick={() => {
                mutableType === "password"
                  ? setMutableType("text")
                  : setMutableType("password");
              }}
            >
              {mutableType === "password" ? <Eye /> : <EyeClosed />}
            </Transition>
          </Field.Addon>
        }
        className="PrismanePasswordField-root"
        data-testid="prismane-password-field"
        ref={ref}
        {...field}
      ></Field>
      <Field.Error size={size as any} className="PrismanePasswordField-error">
        {error}
      </Field.Error>
    </Field.Wrapper>
  );
});

export default PasswordField;
