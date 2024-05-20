import React, { forwardRef, useState, useRef } from "react";
// Components
import Field, { FieldProps, useFieldProps } from "@components/Field";
import Flex from "@components/Flex";
import Hidden from "@components/Hidden";
// Hooks
import useEmulatedFieldChange from "@hooks/useEmulatedFieldChange";
// Types
import { PrismaneProps } from "@types";
// Utils
import { fr } from "@/utils";

export type PinFieldProps = PrismaneProps<
  {
    length?: number;
    masked?: boolean;
  },
  FieldProps
>;

const PinField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  PinFieldProps
>(
  (
    { size = "base", label, error, length = 4, masked = false, ...props },
    ref
  ) => {
    const [rest, field] = useFieldProps(props);

    const [values, setValues] = useState<any>(
      props.value || props.defaultValue || Array.from({ length }, () => "")
    );

    const fieldRefs: any = useRef([]);

    const fieldRef: any = useRef(ref || null);

    const emulateChange = useEmulatedFieldChange(
      fieldRef,
      props.onChange as any
    );

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
      <Field.Wrapper
        pe={(field.disabled || field.readOnly) && "none"}
        {...rest}
      >
        <Field.Label
          size={size as any}
          htmlFor={field.name}
          className="PrismanePinField-label"
        >
          {label}
        </Field.Label>
        <Flex align="center" gap={fr(2)}>
          <Hidden dp="none">
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
              disabled={field.disabled}
              px={fr(1)}
              py={fr(1)}
              grow={false}
              placeholder={field.placeholder ? field.placeholder : "o"}
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
