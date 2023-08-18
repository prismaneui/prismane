import { ForwardedRef, forwardRef, ReactNode } from "react";
// Components
import Box from "../Box/Box";
import Center, { CenterProps } from "../Center/Center";
// Types
import {
  PrismaneColors,
  PrismanePositions,
  Versatile,
  PrismaneBreakpoints,
  PrismaneVersatile,
} from "../../types";
// Utils
import { strip, variants, fr } from "../../utils";

export type BadgeProps = {
  label?: ReactNode;
  position?: PrismanePositions;
  color?: PrismaneColors;
  size?: PrismaneBreakpoints;
} & CenterProps;

const Badge = forwardRef(
  <E extends Versatile>(
    {
      label = 0,
      position = "top-end",
      color = "primary",
      size = "base",
      children,
      className,
      sx,
      ...props
    }: PrismaneVersatile<E, BadgeProps>,
    ref: ForwardedRef<any>
  ) => {
    return (
      <Box w="fit-content" h="fit-content" pos="relative">
        <Center
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
            "right-start": "-30%",
            right: "50%",
            "bottom-end": "70%",
            bottom: "80%",
            "bottom-start": "70%",
            "left-start": "-30%",
            left: "50%",
          })}
          b={variants(position, {
            "top-start": "70%",
            top: "80%",
            "top-end": "70%",
            "right-end": "-30%",
            "left-end": "-30%",
          })}
          r={variants(position, {
            "top-end": "-30%",
            "bottom-end": "-30%",
            "left-start": "70%",
            left: "80%",
            "left-end": "70%",
          })}
          l={variants(position, {
            "top-start": "-30%",
            top: "50%",
            "right-start": "70%",
            right: "80%",
            "right-end": "70%",
            "bottom-start": "-30%",
            bottom: "50%",
          })}
          bg={(theme) => (theme.mode === "dark" ? [color, 700] : [color, 500])}
          cl={[color, 200]}
          sx={{
            transform: variants(position, {
              top: "translateX(-50%)",
              bottom: "translateX(-50%)",
              left: "translateY(-50%)",
              right: "translateY(-50%)",
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
