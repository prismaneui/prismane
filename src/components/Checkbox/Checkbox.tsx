"use client";

import React, { forwardRef } from "react";
import { Check, Minus } from "@phosphor-icons/react";
// Components
import Flex from "@components/Flex";
import Transition from "@components/Transition";
import Field, { useFieldProps } from "@components/Field";
import Animation from "@components/Animation";
import Hidden from "@components/Hidden";
// Utils
import { cx, variants, fr } from "@utils";
// Props
import { CheckboxProps } from "./Checkbox.props";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      indeterminate = false,
      icon,
      label,
      error,
      size = "base",
      className,
      sx,
      ...props
    },
    ref
  ) => {
    const [rest, field] = useFieldProps(props);

    return (
      <Flex direction="column" gap={fr(2)}>
        <Flex
          as="label"
          w="fit-content"
          align="center"
          gap={fr(2)}
          op={field.disabled ? 0.4 : 1}
          pe={field.disabled ? "none" : undefined}
          htmlFor={field.name}
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
                ? field.value || field.checked || indeterminate
                  ? [["primary", 700], { hover: ["primary", 600] }]
                  : [["base", 600], { hover: ["base", 500] }]
                : field.value || field.checked || indeterminate
                ? [["primary", 500], { hover: ["primary", 600] }]
                : [["base", 400], { hover: ["base", 500] }]
            }
            cs="pointer"
            sx={{
              aspectRatio: 1,
              ...sx,
            }}
            className={cx("PrismaneCheckbox-root", className, {
              "PrismaneCheckbox-active": field.value,
              "PrismaneCheckbox-indeterminate": indeterminate,
            })}
            {...rest}
          >
            <Hidden>
              <Field
                type="checkbox"
                data-testid="prismane-checkbox"
                ref={ref}
                size={field.size as any}
                {...field}
              />
            </Hidden>
            <Animation
              as={Flex}
              align="center"
              justify="center"
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
              animated={
                field.value || field.checked || indeterminate ? true : false
              }
              animation={{
                out: { opacity: 0, transform: "scale(0.8)" },
                in: { opacity: 1, transform: "scale(1)" },
              }}
              className="PrismaneCheckbox-thumb"
            >
              {indeterminate ? (
                icon ? (
                  icon
                ) : (
                  <Minus weight="bold" />
                )
              ) : icon ? (
                icon
              ) : (
                <Check weight="bold" />
              )}
            </Animation>
          </Transition>
          <Field.Label
            fs={size}
            htmlFor={field.name}
            className="PrismaneCheckbox-label"
          >
            {label}
          </Field.Label>
        </Flex>
        <Field.Error fs={size} className="PrismaneCheckbox-error">
          {error}
        </Field.Error>
      </Flex>
    );
  }
);

export default Checkbox;
