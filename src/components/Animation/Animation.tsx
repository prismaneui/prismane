import { forwardRef, useEffect, useState } from "react";
// Components
import Transition, { TransitionProps } from "../Transition/Transition";
// Types
import {
  PrismaneAnimations,
  Versatile,
  PrismaneVersatile,
  PrismaneVersatileRef,
  PrismaneProps,
} from "../../types";
// Utils
import { strip } from "../../utils";

export interface Animation {
  in: object;
  out: object;
}

export interface Animations {
  [key: string]: Animation;
}

export type AnimationProps<E extends Versatile = "div"> = PrismaneVersatile<
  E,
  PrismaneProps<
    {
      animation?: PrismaneAnimations | Animation;
      animated?: boolean;
    },
    TransitionProps
  >
>;

type AnimationComponent = <E extends Versatile = "div">(
  props: AnimationProps<E>
) => any;

const Animation: AnimationComponent = forwardRef(
  <E extends Versatile = "div">(
    {
      animation = "fade",
      transition,
      duration,
      delay,
      timing = "ease-in-out",
      animated = true,
      className,
      sx,
      as,
      children,
      ...props
    }: AnimationProps<E>,
    ref: PrismaneVersatileRef<E>
  ) => {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
      setIsAnimated(animated);
    }, [animated]);

    const animations: Animations = {
      fade: {
        in: { opacity: 1 },
        out: { opacity: 0 },
      },
      scale: {
        in: { transform: "scale(1)" },
        out: { transform: "scale(0)" },
      },
      "scale-y": {
        in: { transform: "scaleY(1)" },
        out: { transform: "scaleY(0)" },
      },
      "scale-x": {
        in: { transform: "scaleX(1)" },
        out: { transform: "scaleX(0)" },
      },
      "skew-up": {
        in: { transform: "skewY(0)" },
        out: { transform: "skewY(-15deg)" },
      },
      "skew-down": {
        in: { transform: "skewY(0)" },
        out: { transform: "skewY(15deg)" },
      },
      "rotate-left": {
        in: { transform: "rotate(0)" },
        out: { transform: "rotate(-90deg)" },
      },
      "rotate-right": {
        in: { transform: "rotate(0)" },
        out: { transform: "rotate(90deg)" },
      },
      "slide-down": {
        in: { opacity: 1, transform: "translateY(0)" },
        out: { opacity: 0, transform: "translateY(100%)" },
      },
      "slide-up": {
        in: { opacity: 1, transform: "translateY(0)" },
        out: { opacity: 0, transform: "translateY(-100%)" },
      },
      "slide-left": {
        in: { opacity: 1, transform: "translateX(0)" },
        out: { opacity: 0, transform: "translateX(-100%)" },
      },
      "slide-right": {
        in: { opacity: 1, transform: "translateX(0)" },
        out: { opacity: 0, transform: "translateX(100%)" },
      },
      roll: {
        in: { transform: "rotate(0deg)", opacity: 1 },
        out: { transform: "rotate(-90deg)", opacity: 0 },
      },
      pulse: {
        in: { transform: "scale(1)", opacity: 1 },
        out: { transform: "scale(0.5)", opacity: 0 },
      },
      shake: {
        in: { transform: "translateX(0)", opacity: 1 },
        out: { transform: "translateX(-10px)", opacity: 0 },
      },
      bounce: {
        in: { transform: "translateY(20%)" },
        out: { transform: "translateY(0)" },
      },
      flip: {
        in: { transform: "rotateY(0deg)" },
        out: { transform: "rotateY(180deg)" },
      },
    };

    const a =
      typeof animation === "string" && animations[animation]
        ? animations[animation]
        : (animation as Animation);

    const animate = {
      ...(isAnimated ? a?.in : a?.out),
    };

    const Component = as || "div";

    return (
      <Transition
        as={Component}
        className={strip(
          `${className ? className : ""} PrismaneAnimation-root`
        )}
        transition={transition}
        duration={duration}
        delay={delay}
        timing={timing}
        sx={{ ...animate, ...sx }}
        ref={ref}
        data-testid="prismane-animation"
        {...props}
      >
        {children}
      </Transition>
    );
  }
);

export default Animation;
