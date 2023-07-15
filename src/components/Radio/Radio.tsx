import { forwardRef } from "react";
// Components
import Animation from "../Animation";
import Field from "../Field/Field";
import Flex, { FlexProps } from "../Flex/Flex";
import Transition, { TransitionProps } from "../Transition/Transition";
import Text from "../Text/Text";
import Hidden from "../Hidden/Hidden";
// Context
import { useRadioContext } from "./RadioContext";
// Types
import { PrismaneFieldComponent, PrismaneWithInternal } from "../../types";
// Hooks
import { useFieldProps } from "../Field";
import useId from "../../hooks/useId";
// Utils
import { strip, variants, fr } from "../../utils";

// Internal Components
import RadioGroup, { RadioGroupProps } from "./RadioGroup/RadioGroup";

export { type RadioGroupProps };

export type RadioProps = FlexProps<"div"> &
  TransitionProps<"div"> &
  PrismaneFieldComponent;

const Radio: PrismaneWithInternal<RadioProps, { Group: RadioGroupProps }> =
  forwardRef<HTMLInputElement, RadioProps>(
    (
      {
        label,
        error,
        name,
        value,
        defaultValue,
        size = "base",
        onChange,
        onBlur,
        onFocus,
        className,
        sx,
        ...props
      },
      ref
    ) => {
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
            pe={field.disabled && "none"}
            htmlFor={`${group.name || name}-${uuid}`}
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
                value === group.value || !group.value
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
                  ? value === group.value || !group.value
                    ? [["primary", 700], { hover: ["primary", 600] }]
                    : [["base", 700], { hover: ["base", 600] }]
                  : value === group.value || !group.value
                  ? [["primary", 500], { hover: ["primary", 600] }]
                  : [["base", 300], { hover: ["base", 400] }]
              }
              sx={{
                aspectRatio: "1/1",
                ...sx,
              }}
              className={strip(
                `${className ? className : ""} ${
                  value === group.value ? "PrismaneRadio-root-active" : ""
                } PrismaneRadio-root`
              )}
              {...rest}
            >
              <Hidden>
                <Field
                  id={`${group.name || name}-${uuid}`}
                  name={group.name || name}
                  type="radio"
                  onBlur={group.onBlur || onBlur}
                  onChange={group.onChange || onChange}
                  onFocus={onFocus}
                  value={value}
                  defaultValue={defaultValue}
                  ref={ref}
                  {...field}
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
                bg={(value === group.value || !group.value) && "white"}
                sx={{
                  aspectRatio: "1/1",
                }}
                className="PrismaneRadio-thumb"
                animation="scale"
                animated={value === group.value}
              />
            </Transition>
            <Field.Label
              size={group.size || size}
              htmlFor={`${group.name || name}-${uuid}`}
              className="PrismaneRadio-label"
            >
              {label}
            </Field.Label>
          </Flex>
          <Field.Error
            size={group.size || size}
            className="PrismaneRadio-error"
          >
            {error}
          </Field.Error>
        </Flex>
      );
    }
  );

Radio.Group = RadioGroup;

export default Radio;
