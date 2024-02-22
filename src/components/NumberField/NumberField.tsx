import { forwardRef, useRef } from "react";
import { CaretUp, CaretDown } from "@phosphor-icons/react";
// Components
import Field, { FieldProps } from "../Field/Field";
import Flex from "../Flex/Flex";
import Transition from "../Transition/Transition";
// Hooks
import { useFieldProps } from "../Field";
import useEmulatedFieldChange from "../../hooks/useEmulatedFieldChange";
// Types
import { PrismaneProps } from "../../types";
// Utils
import { strip, fr } from "../../utils";

export type NumberFieldProps = PrismaneProps<
  {
    min?: number;
    max?: number;
  },
  FieldProps
>;

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
          size={size as any}
          htmlFor={field.name}
          className="PrismaneNumberField-label"
        >
          {label}
        </Field.Label>
        <Field
          type="text"
          size={size as any}
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
          data-testid="prismane-number-field"
          ref={fieldRef}
          {...field}
          readOnly
        />
        <Field.Error size={size as any} className="PrismaneNumberField-error">
          {error}
        </Field.Error>
      </Field.Wrapper>
    );
  }
);

export default NumberField;
