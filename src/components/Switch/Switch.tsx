import { forwardRef } from "react";
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

export type SwitchProps = PrismaneFieldComponent &
  FlexProps<"label"> &
  TransitionProps<"label">;

/**
 * Switch Params
 * @param {Object} props
 * @param {string} props.name The name the field will be registered with
 * @param {any} props.register The useForm hook register function
 * @param {any} props.getValues The useForm hook getValue function to toggle the "toggled" style of the component
 * @returns Element
 */

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, error, size = "base", className, sx, ...props }, ref) => {
    const [rest, field] = useFieldProps(props);

    return (
      <Flex direction="column" gap={fr(2)}>
        <Flex align="center" gap={fr(2)} {...rest}>
          <Transition
            as="label"
            pos="relative"
            op={field.disabled ? 0.4 : 1}
            pe={field.disabled && "none"}
            w={variants(size, {
              xs: fr(7.5),
              sm: fr(8.5),
              base: fr(9.5),
              md: fr(10.5),
              lg: fr(11.5),
            })}
            h={variants(size, {
              xs: fr(4.5),
              sm: fr(5),
              base: fr(5.5),
              md: fr(6),
              lg: fr(6.5),
            })}
            p={fr(0.75)}
            br="full"
            dp="flex"
            bs="border-box"
            bg={(theme) =>
              theme.mode === "dark"
                ? props.value
                  ? [["primary", 700], { hover: ["primary", 600] }]
                  : [["base", 700], { hover: ["base", 600] }]
                : props.value
                ? [["primary", 500], { hover: ["primary", 600] }]
                : [["base", 300], { hover: ["base", 400] }]
            }
            htmlFor={props.name}
            sx={{
              cursor: "pointer",
            }}
            className={strip(
              `${className ? className : ""} ${
                props.value ? "PrismaneSwitch-root-active" : ""
              } PrismaneSwitch-root`
            )}
          >
            <Hidden>
              <Field type="checkbox" ref={ref} {...field} />
            </Hidden>
            <Animation
              as={Flex}
              bs="border-box"
              h="100%"
              br="full"
              bg="white"
              className="PrismaneSwitch-thumb"
              sx={{
                aspectRatio: "1/1",
                transform: props.value ? "translateX(100%)" : "translateX(0)",
              }}
            ></Animation>
          </Transition>
          <Field.Label
            size={size}
            htmlFor={props.name}
            className="PrismaneSwitch-label"
          >
            {label}
          </Field.Label>
        </Flex>
        <Field.Error size={size} className="PrismaneSwitch-error">
          {error}
        </Field.Error>
      </Flex>
    );
  }
);

export default Switch;
