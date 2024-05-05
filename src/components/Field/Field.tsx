import { forwardRef, ReactNode } from "react";
// Components
import Box from "@components/Box";
import Flex, { FlexProps } from "@components/Flex";
import Transition, { TransitionProps } from "@components/Transition";
import Icon from "@components/Icon";
import Spinner from "@components/Spinner";
// Types
import {
  PrismaneFieldComponent,
  PrismaneWithInternal,
  Versatile,
  PrismaneVersatile,
  PrismaneVersatileRef,
  PrismaneProps,
} from "@/types";
// Hooks
import { usePrismaneColor } from "../PrismaneProvider";
import useFieldProps from "./useFieldProps";
// Utils
import { strip, variants, fr } from "@/utils";

// Internal Components
import FieldError, { FieldErrorProps } from "./FieldError";
import FieldLabel, { FieldLabelProps } from "./FieldLabel";
import FieldWrapper, { FieldWrapperProps } from "./FieldWrapper";
import FieldAddon, { FieldAddonProps } from "./FieldAddon";

export {
  type FieldErrorProps,
  type FieldLabelProps,
  type FieldWrapperProps,
  type FieldAddonProps,
};

export type FieldProps<E extends Versatile = "input"> = PrismaneVersatile<
  E,
  PrismaneProps<
    {
      icon?: ReactNode;
      validating?: boolean;
    },
    FlexProps & TransitionProps & PrismaneFieldComponent
  >
>;

const Field = forwardRef(
  <E extends Versatile = "input">(
    {
      variant = "outlined",
      icon,
      error,
      validating,
      disabled,
      addons,
      as,
      size = "base",
      children,
      className,
      ...props
    }: FieldProps<E>,
    ref: PrismaneVersatileRef<E>
  ) => {
    const Component = as || "input";

    const { getColor } = usePrismaneColor();

    const [rest, field] = useFieldProps(props);

    return (
      <Transition
        as={Flex}
        duration={100}
        transition="colors"
        align="center"
        grow
        gap={fr(2)}
        h={variants(size, {
          xs: fr(7.5),
          sm: fr(9),
          base: fr(10),
          md: fr(10.5),
          lg: fr(12),
        })}
        px={variants(size, {
          xs: fr(3),
          sm: fr(3.5),
          base: fr(4),
          md: fr(4.5),
          lg: fr(5),
        })}
        py={variants(size, {
          xs: fr(1),
          sm: fr(1.5),
          base: fr(2),
          md: fr(2.5),
          lg: fr(3),
        })}
        br={variants(variant, {
          outlined: "base",
          filled: "base",
          underlined: undefined,
          unstyled: "base",
        })}
        bg={(theme) =>
          variants(variant, {
            outlined: theme.mode === "dark" ? ["base", 800] : "white",
            filled: theme.mode === "dark" ? ["base", 800] : "white",
            underlined: "transparent",
            unstyled: "transparent",
          })
        }
        bdw={variants(variant, {
          outlined: 1,
          filled: undefined,
          underlined: undefined,
          unstyled: undefined,
        })}
        bdbw={variants(variant, {
          outlined: undefined,
          filled: undefined,
          underlined: 1,
          unstyled: undefined,
        })}
        bdc={(theme) =>
          theme.mode === "dark"
            ? error
              ? ["red", 700]
              : [
                  ["base", 700],
                  {
                    hover: ["primary", 700],
                    "focus-within": ["primary", 600],
                  },
                ]
            : error
            ? ["red", 500]
            : [
                ["base", 300],
                {
                  hover: ["primary", 500],
                  "focus-within": ["primary", 400],
                },
              ]
        }
        pe={disabled && "none"}
        op={disabled ? 0.4 : 1}
        of="hidden"
        className={strip(
          `${
            className ? className : ""
          } PrismaneField-root-${size} PrismaneField-root-${variant} PrismaneField-root`
        )}
        {...rest}
      >
        {icon && (
          <Icon
            size={20}
            mr={fr(1)}
            cl={(theme) =>
              theme.mode === "dark"
                ? error
                  ? ["red", 700]
                  : ["base", 500]
                : error
                ? ["red", 500]
                : ["base", 400]
            }
            className="PrismaneField-icon"
          >
            {icon}
          </Icon>
        )}
        <Box
          as={Component}
          bg="transparent"
          fs={variants(size, {
            xs: "xs",
            sm: "sm",
            base: "sm",
            md: "base",
            lg: "md",
          })}
          w="100%"
          cl={(theme) =>
            theme.mode === "dark"
              ? [["base", 300], { ":placeholder": ["base", 400] }]
              : [["base", 800], { ":placeholder": ["base", 500] }]
          }
          sx={{
            "&:-webkit-autofill": (theme) => ({
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color":
                theme.mode === "dark"
                  ? getColor("base", 300)
                  : getColor("base", 800),
            }),
          }}
          className={strip(`${className ? className : ""} PrismaneField-field`)}
          data-testid="prismane-field"
          ref={ref}
          {...field}
        >
          {as === "select" ? children : null}
        </Box>
        {validating && (
          <Flex align="center">
            <Spinner
              size={variants(size, {
                xs: "xs",
                sm: "sm",
                base: "sm",
                md: "base",
                lg: "md",
              })}
              cl={["primary", 500]}
            />
          </Flex>
        )}
        {addons}
      </Transition>
    );
  }
) as PrismaneWithInternal<
  PrismaneVersatile<Versatile, FieldProps>,
  {
    Label: FieldLabelProps;
    Wrapper: FieldWrapperProps;
    Error: FieldErrorProps;
    Addon: FieldAddonProps;
  }
>;

Field.Label = FieldLabel;
Field.Wrapper = FieldWrapper;
Field.Error = FieldError;
Field.Addon = FieldAddon;

export default Field;
