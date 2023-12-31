import { forwardRef } from "react";
import { keyframes } from "../../../stitches.config";
// Components
import Box, { BoxProps } from "../Box/Box";
// Types
import {
  PrismaneAnimations,
  Versatile,
  PrismaneVersatile,
  PrismaneVersatileRef,
  PrismaneProps,
} from "../../types";
// Utils
import { parse, strip } from "../../utils";

export interface Animation {
  in: any;
  out: any;
}

export interface Animations {
  [key: string]: {
    in: { (): string; name: string };
    out: { (): string; name: string };
  };
}

export type AnimationProps<E extends Versatile = "div"> = PrismaneVersatile<
  E,
  PrismaneProps<
    {
      duration?: number;
      delay?: number;
      timing?: string;
      count?: number | string;
      direction?: string;
      fill?: string;
      animation?: PrismaneAnimations | Animation;
      animated?: boolean;
    },
    BoxProps
  >
>;

type AnimationComponent = <E extends Versatile = "div">(
  props: AnimationProps<E>
) => any;

const animations: Animations = {
  fade: {
    in: keyframes({
      "0%": { opacity: 0 },
      "100%": { opacity: 1 },
    }),
    out: keyframes({
      "0%": { opacity: 1 },
      "100%": { opacity: 0 },
    }),
  },
  scale: {
    in: keyframes({
      "0%": { transform: "scale(0)" },
      "100%": { transform: "scale(1)" },
    }),
    out: keyframes({
      "0%": { transform: "scale(1)" },
      "100%": { transform: "scale(0)" },
    }),
  },
  "scale-y": {
    in: keyframes({
      "0%": { transform: "scaleY(0)" },
      "100%": { transform: "scaleY(1)" },
    }),
    out: keyframes({
      "0%": { transform: "scaleY(1)" },
      "100%": { transform: "scaleY(0)" },
    }),
  },
  "scale-x": {
    in: keyframes({
      "0%": { transform: "scaleX(0)" },
      "100%": { transform: "scaleX(1)" },
    }),
    out: keyframes({
      "0%": { transform: "scaleX(1)" },
      "100%": { transform: "scaleX(0)" },
    }),
  },
  "skew-up": {
    in: keyframes({
      "0%": { transform: "skewY(-15deg)" },
      "100%": { transform: "skewY(0)" },
    }),
    out: keyframes({
      "0%": { transform: "skewY(0)" },
      "100%": { transform: "skewY(-15deg)" },
    }),
  },
  "skew-down": {
    in: keyframes({
      "0%": { transform: "skewY(15deg)" },
      "100%": { transform: "skewY(0)" },
    }),
    out: keyframes({
      "0%": { transform: "skewY(0)" },
      "100%": { transform: "skewY(15deg)" },
    }),
  },
  "rotate-left": {
    in: keyframes({
      "0%": { transform: "rotate(-90deg)" },
      "100%": { transform: "rotate(0)" },
    }),
    out: keyframes({
      "0%": { transform: "rotate(0)" },
      "100%": { transform: "rotate(-90deg)" },
    }),
  },
  "rotate-right": {
    in: keyframes({
      "0%": { transform: "rotate(90deg)" },
      "100%": { transform: "rotate(0)" },
    }),
    out: keyframes({
      "0%": { transform: "rotate(0)" },
      "100%": { transform: "rotate(90deg)" },
    }),
  },
  "slide-down": {
    in: keyframes({
      "0%": { opacity: 0, transform: "translateY(100%)" },
      "100%": { opacity: 1, transform: "translateY(0)" },
    }),
    out: keyframes({
      "0%": { opacity: 1, transform: "translateY(0)" },
      "100%": { opacity: 0, transform: "translateY(100%)" },
    }),
  },
  "slide-up": {
    in: keyframes({
      "0%": { opacity: 0, transform: "translateY(-100%)" },
      "100%": { opacity: 1, transform: "translateY(0)" },
    }),
    out: keyframes({
      "0%": { opacity: 1, transform: "translateY(0)" },
      "100%": { opacity: 0, transform: "translateY(-100%)" },
    }),
  },
  "slide-left": {
    in: keyframes({
      "0%": { opacity: 0, transform: "translateX(-100%)" },
      "100%": { opacity: 1, transform: "translateX(0)" },
    }),
    out: keyframes({
      "0%": { opacity: 1, transform: "translateX(0)" },
      "100%": { opacity: 0, transform: "translateX(-100%)" },
    }),
  },
  "slide-right": {
    in: keyframes({
      "0%": { opacity: 0, transform: "translateX(100%)" },
      "100%": { opacity: 1, transform: "translateX(0)" },
    }),
    out: keyframes({
      "0%": { opacity: 1, transform: "translateX(0)" },
      "100%": { opacity: 0, transform: "translateX(100%)" },
    }),
  },
  roll: {
    in: keyframes({
      "0%": { transform: "rotate(-90deg)", opacity: 0 },
      "100%": { transform: "rotate(0deg)", opacity: 1 },
    }),
    out: keyframes({
      "0%": { transform: "rotate(0deg)", opacity: 1 },
      "100%": { transform: "rotate(-90deg)", opacity: 0 },
    }),
  },
  pulse: {
    in: keyframes({
      "0%": { transform: "scale(0.5)", opacity: 0 },
      "100%": { transform: "scale(1)", opacity: 1 },
    }),
    out: keyframes({
      "0%": { transform: "scale(1)", opacity: 1 },
      "100%": { transform: "scale(0.5)", opacity: 0 },
    }),
  },
  shake: {
    in: keyframes({
      "0%": { transform: "translateX(-10px)", opacity: 0 },
      "100%": { transform: "translateX(0)", opacity: 1 },
    }),
    out: keyframes({
      "0%": { transform: "translateX(0)", opacity: 1 },
      "100%": { transform: "translateX(-10px)", opacity: 0 },
    }),
  },
  bounce: {
    in: keyframes({
      "0%": { transform: "translateY(0)" },
      "50%": { transform: "translateY(-20%)" },
      "100%": { transform: "translateY(0)" },
    }),
    out: keyframes({
      "0%": { transform: "translateY(0)" },
      "50%": { transform: "translateY(-20%)" },
      "100%": { transform: "translateY(0)" },
    }),
  },
  flip: {
    in: keyframes({
      "0%": { transform: "rotateY(180deg)" },
      "100%": { transform: "rotateY(0deg)" },
    }),
    out: keyframes({
      "0%": { transform: "rotateY(0deg)" },
      "100%": { transform: "rotateY(180deg)" },
    }),
  },
};

const Animation: AnimationComponent = forwardRef(
  <E extends Versatile = "div">(
    {
      animation = "fade",
      transition,
      duration = 150,
      delay = 0,
      timing = "ease-in-out",
      count = 1,
      direction = "normal",
      fill = "forwards",
      animated = true,
      className,
      sx,
      as,
      children,
      ...props
    }: AnimationProps<E>,
    ref: PrismaneVersatileRef<E>
  ) => {
    const a =
      typeof animation === "string"
        ? animations[animation]
        : {
            in: keyframes({
              from: animation.out,
              to: animation.in,
            }),
            out: keyframes({
              from: animation.in,
              to: animation.out,
            }),
          };

    const Component = as || "div";

    const animate = {
      animation: strip(
        `${duration}ms ${timing} ${delay}ms ${count} ${direction} ${fill} ${
          animated ? a.in : a.out
        }`
      ),
    };

    return (
      <Box
        as={Component}
        className={strip(
          `${className ? className : ""} PrismaneAnimation-root`
        )}
        sx={{
          ...animate,
          ...sx,
        }}
        ref={ref}
        data-testid="prismane-animation"
        {...props}
      >
        {children}
      </Box>
    );
  }
);

export default Animation;
