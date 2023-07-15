import React, { FC, useState } from "react";
import { Meta } from "@storybook/react";
// Components
import Animation from "./Animation";
import Button from "../Button/Button";
import Chip from "../Chip/Chip";
// Hooks
import useAnimation from "../../hooks/useAnimation";
// Types
import { PrismaneAnimations } from "../../types";

export default {
  title: "Animation",
  component: Animation,
} as Meta;

export const Default: FC = () => {
  return (
    <Animation animation="fade">
      <h1>Hello World</h1>
    </Animation>
  );
};

export const Alternate: FC = () => {
  const [animating, setAnimating] = useState(true);

  return (
    <>
      <Animation animation="fade" animated={animating}>
        <h1>Hello World</h1>
      </Animation>
      <Button
        variant="primary"
        onClick={() => setAnimating(!animating)}
        mt={20}
      >
        Animation
      </Button>
    </>
  );
};

const AnimatedChip = ({ children, ...props }: any) => {
  const { animate, animating } = useAnimation(true);

  return (
    <>
      <Animation
        as={Chip}
        onMouseEnter={() => animate()}
        onMouseLeave={() => animate()}
        animated={animating}
        my={20}
        {...props}
      >
        {children}
      </Animation>
    </>
  );
};

export const Custom: FC = () => {
  const animations: PrismaneAnimations[] = [
    "fade",
    "scale",
    "scale-y",
    "scale-x",
    "skew-up",
    "skew-down",
    "rotate-left",
    "rotate-right",
    "slide-down",
    "slide-up",
    "slide-left",
    "slide-right",
    "roll",
    "pulse",
    "shake",
    "bounce",
    "flip",
  ];

  return (
    <>
      {animations.map((animation) => (
        <AnimatedChip animation={animation}>
          {animation.toUpperCase()}
        </AnimatedChip>
      ))}
    </>
  );
};
