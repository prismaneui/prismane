import { forwardRef } from "react";
// Components
import Animation from "@components/Animation";
import Field, { useFieldProps } from "@components/Field";
import Flex, { FlexProps } from "@components/Flex";
import Transition, { TransitionProps } from "@components/Transition";
import Hidden from "@components/Hidden";
// Context
import { useRadioContext } from "./RadioContext";
// Hooks
import useId from "@hooks/useId";
// Types
import { PrismaneFieldComponent, PrismaneWithInternal } from "@types";
// Utils
import { strip, variants, fr } from "@/utils";

// Internal Components
import RadioGroup, { RadioGroupProps } from "./RadioGroup";

export { type RadioGroupProps };

export type RadioProps = FlexProps & TransitionProps & PrismaneFieldComponent;

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, error, size = "base", className, sx, ...props }, ref) => {
    const [rest, field] = useFieldProps(props);

    const uuid = useId();

    const group = useRadioContext();

    return (
      <Flex direction="column" gap={fr(2)}>
        <Flex
          as="label"
          w="fit-content"
          align="center"
          gap={fr(2)}
          op={field.disabled ? 0.4 : 1}
          pe={field.disabled ? "none" : undefined}
          htmlFor={`${group.name || field.name}-${uuid}`}
        >
          <Transition
            as={Flex}
            transition="colors"
            justify="center"
            align="center"
            w={variants(group.size || size, {
              xs: fr(3.5),
              sm: fr(4),
              base: fr(5),
              md: fr(6),
              lg: fr(7),
            })}
            h={variants(group.size || size, {
              xs: fr(3.5),
              sm: fr(4),
              base: fr(5),
              md: fr(6),
              lg: fr(7),
            })}
            bg={(theme) =>
              field.value === group.value || !group.value
                ? theme.mode === "dark"
                  ? [["primary", 700], { hover: ["primary", 600] }]
                  : [["primary", 500], { hover: ["primary", 600] }]
                : theme.mode === "dark"
                ? ["base", 800]
                : ["base", 200]
            }
            br="full"
            cs="pointer"
            bdw={1}
            bdc={(theme) =>
              theme.mode === "dark"
                ? field.value === group.value || !group.value
                  ? [["primary", 700], { hover: ["primary", 600] }]
                  : [["base", 700], { hover: ["base", 600] }]
                : field.value === group.value || !group.value
                ? [["primary", 500], { hover: ["primary", 600] }]
                : [["base", 300], { hover: ["base", 400] }]
            }
            sx={{
              aspectRatio: "1/1",
              ...sx,
            }}
            className={strip(
              `${className ? className : ""} ${
                field.value === group.value ? "PrismaneRadio-root-active" : ""
              } PrismaneRadio-root`
            )}
            {...rest}
          >
            <Hidden>
              <Field
                type="radio"
                data-testid="prismane-radio"
                size={size as any}
                ref={ref}
                {...field}
                onBlur={group.onBlur || field.onBlur}
                onChange={group.onChange || field.onChange}
                id={`${group.name || field.name}-${uuid}`}
                name={group.name || field.name}
              />
            </Hidden>
            <Animation
              h={variants(group.size || size, {
                xs: fr(1.5),
                sm: fr(2),
                base: fr(2.5),
                md: fr(3),
                lg: fr(3.5),
              })}
              w={variants(group.size || size, {
                xs: fr(1.5),
                sm: fr(2),
                base: fr(2.5),
                md: fr(3),
                lg: fr(3.5),
              })}
              br="full"
              bg={
                field.value === group.value || !group.value
                  ? "white"
                  : undefined
              }
              sx={{
                aspectRatio: "1/1",
              }}
              className="PrismaneRadio-thumb"
              animation="scale"
              animated={field.value === group.value}
            />
          </Transition>
          <Field.Label
            fs={group.size || size}
            htmlFor={`${group.name || field.name}-${uuid}`}
            className="PrismaneRadio-label"
          >
            {label}
          </Field.Label>
        </Flex>
        <Field.Error fs={group.size || size} className="PrismaneRadio-error">
          {error}
        </Field.Error>
      </Flex>
    );
  }
) as PrismaneWithInternal<RadioProps, { Group: RadioGroupProps }>;

Radio.Group = RadioGroup;

export default Radio;
