import { ForwardedRef, forwardRef, ReactNode } from "react";
// Components
import Box from "../Box/Box";
import Circle, { CircleProps } from "../Circle/Circle";
import Text from "../Text/Text";
// Types
import {
  PrismaneColors,
  PrismanePositions,
  Versatile,
  PrismaneBreakpoints,
} from "../../types";
// Utils
import { strip, variants, fr } from "../../utils";

export type BadgeProps<E extends Versatile> = {
  label?: ReactNode;
  position?: PrismanePositions;
  color?: PrismaneColors;
  size?: PrismaneBreakpoints;
} & CircleProps<E>;

const Badge = forwardRef(
  <E extends Versatile>(
    {
      label = 0,
      position = "top-start",
      color = "primary",
      size = "base",
      children,
      className,
      sx,
      ...props
    }: BadgeProps<E>,
    ref: ForwardedRef<any>
  ) => {
    return (
      <Box w="fit-content" h="fit-content" pos="relative">
        <Circle
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
          z={50}
          pos="absolute"
          t={variants(position, {
            "right-start": "-50%",
            right: "50%",
            "bottom-end": "80%",
            bottom: "80%",
            "bottom-start": "80%",
            "left-start": "-50%",
            left: "50%",
          })}
          b={variants(position, {
            "top-start": "80%",
            top: "80%",
            "top-end": "80%",
            "right-end": "-50%",
            "left-end": "-50%",
          })}
          r={variants(position, {
            "top-end": "-50%",
            "bottom-end": "-50%",
            "left-start": "80%",
            left: "80%",
            "left-end": "80%",
          })}
          l={variants(position, {
            "top-start": "-50%",
            top: "50%",
            "right-start": "80%",
            right: "80%",
            "right-end": "80%",
            "bottom-start": "-50%",
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
            } PrismaneBadge-${position} PrismaneBadge-root`
          )}
          ref={ref}
          {...props}
        >
          <Text
            fs={variants(size, {
              xs: "xs",
              sm: "sm",
              base: "sm",
              md: "base",
              lg: "md",
            })}
          >
            {label}
          </Text>
        </Circle>
        {children}
      </Box>
    );
  }
);

export default Badge;
