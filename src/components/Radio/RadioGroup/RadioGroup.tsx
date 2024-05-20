"use client";

import { forwardRef } from "react";
// Components
import Stack from "@components/Stack";
import Field, { useFieldProps } from "@components/Field";
import Flex, { FlexProps } from "@components/Flex";
// Context
import { RadioContextProvider } from "../RadioContext";
// Types
import { PrismaneFieldComponent } from "@types";
// Utils
import { strip, fr } from "@/utils";

export type RadioGroupProps = PrismaneFieldComponent & FlexProps;

const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ children, className, ...props }, ref) => {
    const [rest, field] = useFieldProps(props);

    const { label, error, ...radio } = field;

    return (
      <Stack>
        <Field.Label fs={radio.size} className="PrismaneRadioGroup-label">
          {label}
        </Field.Label>
        <Flex
          className={strip(
            `${className ? className : ""} PrismaneRadioGroup-root`
          )}
          align="center"
          gap={fr(4)}
          data-testid="prismane-radio-group"
          ref={ref}
          {...rest}
        >
          <RadioContextProvider value={radio}>{children}</RadioContextProvider>
        </Flex>
        <Field.Error fs={radio.size} className="PrismaneRadioGroup-error">
          {error}
        </Field.Error>
      </Stack>
    );
  }
);

export default RadioGroup;
