import { forwardRef, useState, useRef } from "react";
import { CaretUp, CaretDown } from "@phosphor-icons/react";
// Components
import Field, { FieldProps } from "../Field/Field";
import Flex from "../Flex/Flex";
import Transition from "../Transition/Transition";
// Hooks
import { useFieldProps } from "../Field";
import useEmulatedFieldChange from "../../hooks/useEmulatedFieldChange";
// Types
import { PrismaneFieldComponent } from "../../types";
// Utils
import { strip, fr } from "../../utils";

export type NumberFieldProps = {
  min?: number;
  max?: number;
} & FieldProps<"input">;

/**
    A component for rendering a password input field with an eye icon to toggle visibility.
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
    @param {string} defaultValue - The default value of the input field.
    @param {boolean} readOnly - A flag indicating whether the input field is read-only.
    @returns {JSX.Element} A JSX element representing the NumberField component.
    */

const NumberField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  NumberFieldProps
>(
  (
    { min = 0, max = 0, label, error, size = "base", className, ...props },
    ref
  ) => {
    const [rest, field] = useFieldProps(props);

    const fieldRef = useRef(ref || null);

    const emulateChange = useEmulatedFieldChange(fieldRef, props.onChange);

    return (
      <Field.Wrapper {...rest}>
        <Field.Label
          size={size}
          htmlFor={field.name}
          className="PrismaneNumberField-label"
        >
          {label}
        </Field.Label>
        <Field
          type="text"
          size={size}
          error={error}
          py="0"
          pr="0"
          addons={
            <Field.Addon
              direction="column"
              bdlw={1}
              bdc={(theme) =>
                theme.mode === "dark" ? ["base", 600] : ["base", 300]
              }
            >
              <Transition
                as={Flex}
                h="50%"
                align="center"
                justify="center"
                px={fr(1.5)}
                bg={(theme) =>
                  theme.mode === "dark"
                    ? ["transparent", { hover: ["base", 700, 0.5] }]
                    : ["transparent", { hover: ["base", 200, 0.75] }]
                }
                cl={(theme) =>
                  theme.mode === "dark" ? ["base", 200] : ["base", 700]
                }
                cs="pointer"
                bdbw={1}
                bdc="inherit"
                onClick={() => {
                  const nv = Number(props.value) + 1;

                  if (max && nv > max) return;

                  emulateChange(nv);
                }}
              >
                <CaretUp />
              </Transition>
              <Transition
                as={Flex}
                h="50%"
                align="center"
                justify="center"
                px={fr(1.5)}
                bg={(theme) =>
                  theme.mode === "dark"
                    ? ["transparent", { hover: ["base", 700, 0.5] }]
                    : ["transparent", { hover: ["base", 200, 0.75] }]
                }
                cl={(theme) =>
                  theme.mode === "dark" ? ["base", 200] : ["base", 700]
                }
                cs="pointer"
                onClick={() => {
                  const nv = Number(props.value) - 1;

                  if (min && nv < min) return;

                  emulateChange(nv);
                }}
              >
                <CaretDown />
              </Transition>
            </Field.Addon>
          }
          className={strip(
            `${className ? className : ""} PrismaneNumberField-root`
          )}
          ref={fieldRef}
          {...field}
          readOnly
        />
        <Field.Error size={size} className="PrismaneNumberField-error">
          {error}
        </Field.Error>
      </Field.Wrapper>
    );
  }
);

export default NumberField;
