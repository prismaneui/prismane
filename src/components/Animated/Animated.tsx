import { FC } from "react";
import {
  motion,
  Transition,
  AnimationControls,
  VariantLabels,
  TargetAndTransition,
} from "framer-motion";
// Types
import { Animations, PrismaneComponent } from "../../types";
// Utils
import { strip } from "../../utils/internal";

export interface AnimatedProps extends PrismaneComponent {
  entry:
    | Animations
    | {
        initial: AnimationControls | VariantLabels | TargetAndTransition;
        animated: AnimationControls | VariantLabels | TargetAndTransition;
      };
  exit?:
    | Animations
    | {
        initial: AnimationControls | VariantLabels | TargetAndTransition;
        animated: AnimationControls | VariantLabels | TargetAndTransition;
      };
  presence?:
    | Animations
    | AnimationControls
    | VariantLabels
    | TargetAndTransition;
  alternate?: boolean;
  transition?: "spring" | "tween" | "inertia" | "linear" | Transition;
  whileHover?: VariantLabels | TargetAndTransition;
  whileTap?: VariantLabels | TargetAndTransition;
  whileInView?: VariantLabels | TargetAndTransition;
  whileFocus?: VariantLabels | TargetAndTransition;
  whileDrag?: VariantLabels | TargetAndTransition;
  layout?: boolean;
  layoutId?: string;
}

const Animated: FC<AnimatedProps> = ({
  children,
  entry,
  exit,
  presence,
  alternate,
  transition,
  className,
  ...props
}) => {
  const animations: any = {
    scaleIn: {
      initial: {
        scale: 0.5,
        opacity: 0,
      },
      animated: {
        scale: 1,
        opacity: 1,
      },
    },
    scaleOut: {
      initial: {
        scale: 1,
        opacity: 1,
      },
      animated: {
        scale: 0,
        opacity: 0,
      },
    },
    slideTop: {
      initial: {
        y: "-15%",
      },
      animated: {
        y: 0,
      },
    },
    slideLeft: {
      initial: {
        x: "-15%",
      },
      animated: {
        x: 0,
      },
    },
    slideRight: {
      initial: {
        x: "15%",
      },
      animated: {
        x: 0,
      },
    },
    slideBottom: {
      initial: {
        y: "15%",
      },
      animated: {
        y: 0,
      },
    },
    slideOutTop: {
      initial: {
        y: 0,
      },
      animated: {
        y: "-100%",
      },
    },
    slideOutLeft: {
      initial: {
        x: 0,
      },
      animated: {
        x: "-100%",
      },
    },
    slideOutRight: {
      initial: {
        x: 0,
      },
      animated: {
        x: "100%",
      },
    },
    slideOutBottom: {
      initial: {
        y: 0,
      },
      animated: {
        y: "100%",
      },
    },
    slideInTop: {
      initial: { y: "-100%" },
      animated: { y: 0 },
    },
    slideInLeft: {
      initial: { x: "-100%" },
      animated: { x: 0 },
    },
    slideInRight: {
      initial: { x: "100%" },
      animated: { x: 0 },
    },
    slideInBottom: {
      initial: { y: "100%" },
      animated: { y: 0 },
    },
    fadeIn: { initial: { opacity: 0 }, animated: { opacity: 1 } },
    fadeOut: { initial: { opacity: 1 }, animated: { opacity: 0 } },
    none: { initial: { opacity: 1 }, animated: { opacity: 1 } },
  };

  const transitions = {
    spring: { type: "spring", damping: 25, stiffness: 350 },
    tween: { type: "tween", duration: 2 },
    inertia: { type: "inertia", velocity: 50 },
    linear: {
      duration: 0.5,
      delay: 0,
      ease: [0, 0.7, 0.2, 1],
    },
  };

  return (
    <motion.div
      className={strip(`w-fit ${className ? className : ""} PrsmAnimated-root`)}
      initial={
        !alternate
          ? typeof entry === "string"
            ? animations[entry].initial
            : entry.initial
          : typeof exit === "string" || typeof exit === "undefined"
          ? animations[exit ?? "fadeOut"].initial
          : exit.initial
      }
      animate={
        !alternate
          ? typeof entry === "string"
            ? animations[entry].animated
            : entry.animated
          : typeof exit === "string" || typeof exit === "undefined"
          ? animations[exit ?? "fadeOut"].animated
          : exit.animated
      }
      exit={
        typeof presence === "string" ? animations[presence].animated : presence
      }
      transition={
        typeof transition === "string"
          ? transitions[transition]
          : transition
          ? transition
          : transitions["spring"]
      }
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Animated;
