import { forwardRef } from "react";
// Components
import Animation from "@components/Animation";
import Flex, { FlexProps } from "@components/Flex";
import Transition, { TransitionProps } from "@components/Transition";
import Field, { useFieldProps } from "@components/Field";
import Hidden from "@components/Hidden";
// Types
import { PrismaneFieldComponent } from "@/types";
// Utils
import { strip, variants, fr } from "@/utils";

export type SwitchProps = PrismaneFieldComponent & FlexProps & TransitionProps;

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
            pe={field.disabled ? "none" : undefined}
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
                ? field.value
                  ? [["primary", 700], { hover: ["primary", 600] }]
                  : [["base", 700], { hover: ["base", 600] }]
                : field.value
                ? [["primary", 500], { hover: ["primary", 600] }]
                : [["base", 300], { hover: ["base", 400] }]
            }
            htmlFor={field.name}
            sx={{
              cursor: "pointer",
              ...sx,
            }}
            className={strip(
              `${className ? className : ""} ${
                field.value ? "PrismaneSwitch-root-active" : ""
              } PrismaneSwitch-root`
            )}
          >
            <Hidden>
              <Field
                type="checkbox"
                data-testid="prismane-switch"
                size={size as any}
                ref={ref}
                {...field}
              />
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
                transform: field.value ? "translateX(100%)" : "translateX(0)",
              }}
            ></Animation>
          </Transition>
          <Field.Label
            fs={size}
            htmlFor={field.name}
            className="PrismaneSwitch-label"
          >
            {label}
          </Field.Label>
        </Flex>
        <Field.Error fs={size} className="PrismaneSwitch-error">
          {error}
        </Field.Error>
      </Flex>
    );
  }
);

export default Switch;
