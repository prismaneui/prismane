import React, { forwardRef, ReactNode } from "react";
// Components
import Box from "@components/Box";
import Center, { CenterProps } from "@components/Center";
// Types
import {
  PrismaneColors,
  PrismanePositions,
  PrismaneBreakpoints,
  Versatile,
  PrismaneVersatile,
  PrismaneVersatileRef,
  PrismaneProps,
} from "@types";
// Utils
import { strip, variants, fr } from "@/utils";

export type BadgeProps<E extends Versatile = "div"> = PrismaneVersatile<
  E,
  PrismaneProps<
    {
      label?: ReactNode;
      position?: PrismanePositions;
      color?: PrismaneColors;
      size?: PrismaneBreakpoints;
    },
    CenterProps
  >
>;

type BadgeComponent = <E extends Versatile = "div">(
  props: BadgeProps<E>
) => any;

const Badge: BadgeComponent = forwardRef(
  <E extends Versatile = "div">(
    {
      label = 0,
      position = "top-end",
      color = "primary",
      size = "base",
      as,
      children,
      className,
      sx,
      ...props
    }: BadgeProps<E>,
    ref: PrismaneVersatileRef<E>
  ) => {
    const Component = as || "div";

    return (
      <Box w="fit-content" h="fit-content" pos="relative">
        <Center
          as={Component}
          h={variants(size, {
            xs: fr(4),
            sm: fr(5),
            base: fr(6),
            md: fr(7),
            lg: fr(8),
          })}
          miw={variants(size, {
            xs: fr(4),
            sm: fr(5),
            base: fr(6),
            md: fr(7),
            lg: fr(8),
          })}
          bs="border-box"
          br="full"
          px={variants(size, {
            xs: fr(1),
            sm: fr(1.5),
            base: fr(2),
            md: fr(2.5),
            lg: fr(2.5),
          })}
          fs={variants(size, {
            xs: "xs",
            sm: "sm",
            base: "sm",
            md: "base",
            lg: "md",
          })}
          z={200}
          pos="absolute"
          t={variants(position, {
            "top-start": "0%",
            top: "0%",
            "top-end": "0%",
            "right-start": "0%",
            right: "50%",
            "left-start": "0%",
            left: "50%",
          })}
          b={variants(position, {
            "bottom-start": "0%",
            bottom: "0%",
            "bottom-end": "0%",
            "right-end": "0%",
            "left-end": "0%",
          })}
          r={variants(position, {
            "top-end": "0%",
            "right-start": "0%",
            right: "0%",
            "right-end": "0%",
            "bottom-end": "0%",
          })}
          l={variants(position, {
            "top-start": "0%",
            top: "50%",
            "left-start": "0%",
            left: "0%",
            "left-end": "0%",
            "bottom-start": "0%",
            bottom: "50%",
          })}
          bg={(theme) => (theme.mode === "dark" ? [color, 700] : [color, 500])}
          cl={[color, 200]}
          sx={{
            transform: variants(position, {
              "top-start": "translate(-50%, -50%)",
              top: "translate(-50%, -50%)",
              "top-end": "translate(50%, -50%)",
              "right-start": "translate(50%, -50%)",
              right: "translate(50%, -50%)",
              "right-end": "translate(50%, 50%)",
              "bottom-start": "translate(-50%, 50%)",
              bottom: "translate(-50%, 50%)",
              "bottom-end": "translate(50%, 50%)",
              "left-start": "translate(-50%, -50%)",
              left: "translate(-50%, -50%)",
              "left-end": "translate(-50%, 50%)",
            }),
            whiteSpace: "nowrap",
            ...sx,
          }}
          className={strip(
            `${
              className ? className : ""
            } PrismaneBadge-root-${position} PrismaneBadge-root-${color} PrismaneBadge-root-${size} PrismaneBadge-root`
          )}
          ref={ref}
          data-testid="prismane-badge"
          {...props}
        >
          {label}
        </Center>
        {children}
      </Box>
    );
  }
);

export default Badge;
