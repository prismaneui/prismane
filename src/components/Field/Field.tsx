import { ForwardedRef, forwardRef, ReactNode } from "react";
// Components
import Box from "../Box/Box";
import Flex, { FlexProps } from "../Flex/Flex";
import Transition, { TransitionProps } from "../Transition/Transition";
import Icon from "../Icon/Icon";
import Spinner from "../Spinner/Spinner";
// Types
import {
  PrismaneFieldComponent,
  PrismaneWithInternal,
  Versatile,
} from "../../types";
// Utils
import { strip, variants, fr } from "../../utils";

// Internal Components
import FieldError, { FieldErrorProps } from "./FieldError/FieldError";
import FieldLabel, { FieldLabelProps } from "./FieldLabel/FieldLabel";
import FieldWrapper, { FieldWrapperProps } from "./FieldWrapper/FieldWrapper";
import FieldAddon, { FieldAddonProps } from "./FieldAddon/FieldAddon";

export { type FieldErrorProps };
export { type FieldLabelProps };
export { type FieldWrapperProps };
export { type FieldAddonProps };

export type FieldProps<E extends Versatile> = {
  type?: string | undefined;
  placeholder?: string;
  readOnly?: boolean;
  maxLength?: number;
  minLength?: number;
  icon?: ReactNode;
  validating?: boolean;
  disabled?: boolean;
} & FlexProps<"div"> &
  TransitionProps<"div"> &
  PrismaneFieldComponent;

/**
 * A form field component that renders an input element wrapped in a customizable box, with support for icons, labels, errors, and addons.
 *
 * @typedef {object} FieldProps
 * @property {string} [placeholder] - The placeholder text for the input field.
 * @property {string} [type] - The type of the input field.
 * @property {boolean} [readOnly] - Whether the input field is read-only.
 * @property {number} [min] - The minimum value for the input field.
 * @property {number} [max] - The maximum value for the input field.
 * @property {ReactNode} [icon] - The icon to display on the left side of the input field.
 * @property {string | null} [error] - The error message to display.
 * @property {boolean} [validating] - Whether the input field is currently being validated.
 * @property {ReactNode} [addons] - Additional elements to render after the input field.
 * @property {Versatile} [as] - The HTML tag to use for the input element. Defaults to "input".
 * @property {string} [size] - The size of the input field.
 * @property {FieldLabelProps} [Label] - A custom label component to use.
 * @property {FieldWrapperProps} [Wrapper] - A custom wrapper component to use.
 * @property {FieldErrorProps} [Error] - A custom error component to use.
 * @property {string} [className] - The class name to apply to the root element.
 *
 * @template E - The HTML element type of the input element.
 * @extends {FlexProps<E> & PrismaneFieldComponent}
 * @property {ForwardedRef<any>} ref - A ref to the input element.
 * @returns {JSX.Element} The rendered Field component.
 */

const Field: PrismaneWithInternal<
  FieldProps<Versatile>,
  {
    Label: FieldLabelProps;
    Wrapper: FieldWrapperProps;
    Error: FieldErrorProps;
    Addon: FieldAddonProps;
  }
> = forwardRef(
  <E extends Versatile>(
    {
      variant = "outlined",
      name,
      id = name,
      placeholder,
      type,
      readOnly,
      maxLength,
      minLength,
      icon,
      error,
      validating,
      disabled,
      addons,
      value,
      defaultValue,
      onChange,
      onFocus,
      onBlur,
      as = "input",
      size = "base",
      children,
      className,
      ...props
    }: FieldProps<E>,
    ref: ForwardedRef<any>
  ) => {
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
        className={strip(`${className ? className : ""} PrismaneField-root`)}
        {...props}
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
          as={as}
          fs={variants(size, {
            xs: "xs",
            sm: "sm",
            base: "sm",
            md: "base",
            lg: "md",
          })}
          w="100%"
          id={id}
          name={name}
          placeholder={placeholder}
          type={type}
          cl={(theme) =>
            theme.mode === "dark"
              ? [["base", 300], { ":placeholder": ["base", 400] }]
              : [["base", 800], { ":placeholder": ["base", 500] }]
          }
          className={strip(`${className ? className : ""} PrismaneField-field`)}
          maxLength={maxLength}
          minLength={minLength}
          readOnly={readOnly}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          ref={ref}
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
);

Field.Label = FieldLabel;
Field.Wrapper = FieldWrapper;
Field.Error = FieldError;
Field.Addon = FieldAddon;

export default Field;
