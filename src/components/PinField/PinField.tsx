import { forwardRef, useState, useRef } from "react";
// Components
import Field, { FieldProps } from "../Field/Field";
import Flex from "../Flex/Flex";
import Hidden from "../Hidden/Hidden";
// Hooks
import { useFieldProps } from "../Field";
import useEmulatedFieldChange from "../../hooks/useEmulatedFieldChange";
// Types
import { PrismaneProps } from "../../types";
// Utils
import { fr } from "../../utils";

export type PinFieldProps = PrismaneProps<
  {
    length?: number;
    masked?: boolean;
  },
  FieldProps
>;

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
    @returns {JSX.Element} A JSX element representing the PinField component.
    */

const PinField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  PinFieldProps
>(
  (
    {
      length = 4,
      masked = false,
      label,
      error,
      size = "base",
      className,
      ...props
    },
    ref
  ) => {
    const [rest, field] = useFieldProps(props);

    const [values, setValues] = useState<any>(
      props.value || props.defaultValue || Array.from({ length }, () => "")
    );

    const fieldRefs: any = useRef([]);

    const fieldRef: any = useRef(ref || null);

    const emulateChange = useEmulatedFieldChange(fieldRef, props.onChange);

    const focus = (index: number) => {
      if (fieldRefs.current[index]) {
        fieldRefs.current[index].focus();
      }
    };

    const handleKeyDown = (event: any, index: number) => {
      if (event.key === "Backspace" && event.target.value === "") {
        focus(index - 1);
      } else if (event.key === "ArrowLeft") {
        focus(index - 1);
      } else if (event.key === "ArrowRight") {
        focus(index + 1);
      }
    };

    const handleChange = (event: any, index: number) => {
      event.preventDefault();
      const value = event.target.value;
      if (!isNaN(Number(value))) {
        const nv = values.slice();
        nv[index] = value;
        setValues(nv);
        emulateChange(nv.join(""));
        if (value.length === 1) {
          focus(index + 1);
        }
      }
    };

    const handlePaste = (event: any) => {
      const pasted = event.clipboardData.getData("text");
      if (/^\d+$/.test(pasted) && pasted.length === length) {
        const nv = pasted.split("");
        setValues(nv);
        emulateChange(nv.join(""));
        nv.forEach((data: any, index: any) => {
          fieldRefs.current[index].value = data;
          focus(index + 1);
        });
        event.preventDefault();
      }
    };

    return (
      <Field.Wrapper {...rest}>
        <Field.Label
          size={size as any}
          htmlFor={field.name}
          className="PrismanePinField-label"
        >
          {label}
        </Field.Label>
        <Flex align="center" gap={fr(2)}>
          <Hidden>
            <Field
              data-testid="prismane-pin-field"
              ref={fieldRef}
              size={size as any}
              type="text"
              {...field}
            />
          </Hidden>
          {Array.from({ length }, (_, index) => (
            <Field
              variant={field.variant}
              error={error}
              size={size as any}
              type={masked ? "password" : "text"}
              px={fr(1)}
              py={fr(1)}
              grow={false}
              placeholder="o"
              onKeyDown={(event: any) => handleKeyDown(event, index)}
              onChange={(event: any) => handleChange(event, index)}
              onPaste={handlePaste}
              maxLength={1}
              sx={{
                ".PrismaneField-field": {
                  textAlign: "center",
                },
                aspectRatio: "1/1",
              }}
              key={index}
              ref={(el: any) => (fieldRefs.current[index] = el) as any}
            />
          ))}
        </Flex>
        <Field.Error size={size as any} className="PrismanePinField-error">
          {error}
        </Field.Error>
      </Field.Wrapper>
    );
  }
);

export default PinField;
