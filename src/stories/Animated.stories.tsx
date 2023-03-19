import React, { FC } from "react";
import { Meta } from "@storybook/react";
// Components
import Animated from "../components/Animated/Animated";
import Button from "../components/Button/Button";
// Hooks
import useAnimation from "../hooks/useAnimation";

export default {
  title: "Animated",
  component: Animated,
} as Meta;

export const Default: FC = () => {
  return (
    <Animated entry="fadeIn">
      <h1>Hello World</h1>
    </Animated>
  );
};

export const Alternate: FC = () => {
  const { alternate, setAlternate } = useAnimation("short");

  return (
    <>
      <Animated entry="scaleIn" exit="scaleOut" alternate={alternate}>
        <h1>Hello World</h1>
      </Animated>
      <Button
        variant="primary"
        onClick={() => setAlternate(!alternate)}
        className="mt-5"
      >
        Alternate Animation
      </Button>
    </>
  );
};

export const Custom_Animation: FC = () => {
  return (
    <Animated
      entry={{
        initial: { x: 0, y: 0, rotate: 0 },
        animated: { x: 200, y: 200, rotate: 45 },
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.2 }}
    >
      <span className="font-bold text-2xl text-base-900">Hover & Click Me</span>
    </Animated>
  );
};
