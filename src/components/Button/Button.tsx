import { forwardRef, ReactNode } from "react";
// Components
import Transition, { TransitionProps } from "../Transition/Transition";
import Text from "../Text/Text";
import Icon from "../Icon/Icon";
import Spinner from "../Spinner/Spinner";
// Types
import {
  PrismaneBreakpoints,
  PrismaneColors,
  Versatile,
  PrismaneVersatile,
  PrismaneVersatileRef,
  PrismaneProps,
} from "../../types";
// Utils
import { strip, variants, fr } from "../../utils";

export type ButtonProps<E extends Versatile = "button"> = PrismaneVersatile<
  E,
  PrismaneProps<
    {
      icon?: ReactNode;
      iconPosition?: "left" | "right";
      type?: "submit" | "reset" | "button";
      loading?: boolean;
      disabled?: boolean;
      variant?: "primary" | "secondary" | "tertiary" | "text";
      color?: PrismaneColors;
      size?: PrismaneBreakpoints;
      full?: boolean;
      shadow?: boolean;
      fillOnHover?: boolean;
    },
    TransitionProps
  >
>;

type ButtonComponent = <E extends Versatile = "button">(
  props: ButtonProps<E>
) => any;

const Button: ButtonComponent = forwardRef(
  <E extends Versatile = "button">(
    {
      icon,
      iconPosition = "left",
      type,
      loading,
      disabled,
      variant = "primary",
      color = "primary",
      size = "base",
      full,
      shadow,
      fillOnHover,
      as,
      children,
      className,
      sx,
      ...props
    }: ButtonProps<E>,
    ref: PrismaneVersatileRef<E>
  ) => {
    const Component = as || "button";

    return (
      <Transition
        as={Component}
        px={variants(size, {
          xs: fr(2.5),
          sm: fr(3.5),
          base: fr(4.5),
          md: fr(5.5),
          lg: fr(6.5),
        })}
        py={variants(size, {
          xs: fr(0.75),
          sm: fr(1.25),
          base: fr(1.75),
          md: fr(2.25),
          lg: fr(2.75),
        })}
        h="fit-content"
        br={variants(size, {
          xs: "xs",
          sm: "sm",
          base: "base",
          md: "base",
          lg: "md",
        })}
        op={[1, { disabled: 0.5 }]}
        bg={(theme) =>
          variants(variant, {
            primary:
              theme.mode === "dark"
                ? [
                    [color, 700],
                    { hover: [color, 600, 0.9], active: [color, 600] },
                  ]
                : [
                    [color, 500],
                    { hover: [color, 600, 0.9], active: [color, 600] },
                  ],
            secondary:
              theme.mode === "dark"
                ? [
                    [color, 700, 0.1],
                    {
                      hover: fillOnHover ? [color, 700] : [color, 700, 0.15],
                      active: !fillOnHover && [color, 700, 0.2],
                    },
                  ]
                : [
                    [color, 500, 0.1],
                    {
                      hover: fillOnHover ? [color, 500] : [color, 500, 0.15],
                      active: !fillOnHover && [color, 500, 0.2],
                    },
                  ],
            tertiary:
              theme.mode === "dark"
                ? [
                    "transparent",
                    {
                      hover: fillOnHover ? [color, 700] : [color, 700, 0.1],
                      active: !fillOnHover && [color, 700, 0.2],
                    },
                  ]
                : [
                    "transparent",
                    {
                      hover: fillOnHover ? [color, 500] : [color, 500, 0.1],
                      active: !fillOnHover && [color, 500, 0.2],
                    },
                  ],
          })
        }
        cl={(theme) =>
          variants(variant, {
            primary: "white",
            secondary:
              theme.mode === "dark"
                ? [[color, 200], { hover: fillOnHover && "white" }]
                : [[color, 700], { hover: fillOnHover && "white" }],
            tertiary:
              theme.mode === "dark"
                ? [[color, 200], { hover: fillOnHover && "white" }]
                : [[color, 700], { hover: fillOnHover && "white" }],
            text:
              theme.mode === "dark"
                ? [[color, 500], { hover: [color, 400] }]
                : [[color, 600], { hover: [color, 700] }],
          })
        }
        bdw={variant === "tertiary" && 1}
        bdc={(theme) =>
          variant === "tertiary" && theme.mode === "dark"
            ? [color, 500]
            : [color, 300]
        }
        pe={[loading && "none", { disabled: "none" }]}
        cs="pointer"
        bsh={shadow && "md"}
        dp="flex"
        w={full ? "100%" : "fit-content"}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          gap: variants(size, {
            xs: fr(1),
            sm: fr(2),
            base: fr(3),
            md: fr(4),
            lg: fr(5),
          }),
          ...sx,
        }}
        className={strip(
          `${
            className ? className : ""
          } PrismaneButton-${size} PrismaneButton-${color} PrismaneButton-${variant} PrismaneButton-root`
        )}
        type={type}
        disabled={loading || disabled}
        ref={ref}
        data-testid="prismane-button"
        {...props}
      >
        {icon && !loading && (
          <Icon
            size={variants(size, {
              xs: fr(4.5),
              sm: fr(4.5),
              base: fr(5),
              md: fr(6),
              lg: fr(7.5),
            })}
            sx={{
              order: iconPosition === "right" ? 1 : -1,
            }}
            className="PrismaneButton-icon"
          >
            {icon}
          </Icon>
        )}
        {loading && (
          <Spinner
            size={variants(size, {
              xs: fr(4.75),
              sm: fr(4.75),
              base: fr(5.25),
              md: fr(6.25),
              lg: fr(7.75),
            })}
          />
        )}
        {children && (
          <Text
            className="PrismaneButton-text"
            fs={variants(size, {
              xs: "xs",
              sm: "sm",
              base: "sm",
              md: "base",
              lg: "lg",
            })}
          >
            {children}
          </Text>
        )}
      </Transition>
    );
  }
);

export default Button;
