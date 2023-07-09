import { forwardRef } from "react";
import { Check, Minus } from "@phosphor-icons/react";
// Components
import Animation from "../Animation/Animation";
import Flex, { FlexProps } from "../Flex/Flex";
import Transition, { TransitionProps } from "../Transition/Transition";
import Field from "../Field/Field";
import Hidden from "../Hidden/Hidden";
// Hooks
import { useFieldProps } from "../Field";
// Types
import { PrismaneFieldComponent } from "../../types";
// Utils
import { strip, variants, fr } from "../../utils";

export type CheckboxProps = { indeterminate?: boolean } & FlexProps<"div"> &
  TransitionProps<"div"> &
  PrismaneFieldComponent;

/**
 * Checkbox Params
 * @param {Object} props
 * @param {string} props.name The name the field will be registered with
 * @returns Element
 */

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      indeterminate = false,
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

    return (
      <Flex
        as="label"
        w="fit-content"
        align="center"
        gap={fr(2)}
        op={field.disabled ? 0.4 : 1}
        pe={field.disabled && "none"}
        htmlFor={name}
      >
        <Transition
          as={Flex}
          transition="colors"
          justify="center"
          align="center"
          h={variants(size, {
            xs: fr(3.5),
            sm: fr(4),
            base: fr(5),
            md: fr(6),
            lg: fr(7),
          })}
          w={variants(size, {
            xs: fr(3.5),
            sm: fr(4),
            base: fr(5),
            md: fr(6),
            lg: fr(7),
          })}
          bg={(theme) =>
            theme.mode === "dark" ? ["base", 800] : ["base", 200]
          }
          br="sm"
          bdw={1}
          bdc={(theme) =>
            theme.mode === "dark"
              ? value
                ? [["primary", 700], { hover: ["primary", 600] }]
                : [["base", 600], { hover: ["base", 500] }]
              : value
              ? [["primary", 500], { hover: ["primary", 600] }]
              : [["base", 400], { hover: ["base", 500] }]
          }
          cs="pointer"
          sx={{
            aspectRatio: 1,
            ...sx,
          }}
          className={strip(
            `${className ? className : ""} ${
              value ? "PrismaneCheckbox-active" : ""
            } PrismaneCheckbox-root`
          )}
          {...rest}
        >
          <Hidden>
            <Field
              id={name}
              name={name}
              type="checkbox"
              onBlur={onBlur}
              onChange={onChange}
              onFocus={onFocus}
              value={value}
              defaultValue={defaultValue}
              ref={ref}
              {...field}
            />
          </Hidden>
          <Animation
            as={Flex}
            justify="center"
            align="center"
            w="100%"
            h="100%"
            fs={variants(size, {
              xs: "xs",
              sm: "sm",
              base: "sm",
              md: "base",
              lg: "md",
            })}
            cl="white"
            bg={(theme) =>
              theme.mode === "dark" ? ["primary", 600] : ["primary", 500]
            }
            br="xs"
            className="PrismaneCheckbox-thumb"
            animated={value}
            animation={{
              out: { opacity: 0, transform: "scale(0.8)" },
              in: { opacity: 1, transform: "scale(1)" },
            }}
          >
            {indeterminate ? <Minus weight="bold" /> : <Check weight="bold" />}
          </Animation>
        </Transition>
        <Flex direction="column" align="center" gap={fr(2)}>
          <Field.Label size={size} className="PrismaneCheckbox-label">
            {label}
          </Field.Label>
          <Field.Error size={size} className="PrismaneCheckbox-label">
            {error}
          </Field.Error>
        </Flex>
      </Flex>
    );
  }
);

export default Checkbox;
