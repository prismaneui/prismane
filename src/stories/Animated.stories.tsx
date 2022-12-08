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
    <Animated animationIn="animate-slide-left">
      <h1>Hello World</h1>
    </Animated>
  );
};

export const Alternate: FC = () => {
  const { alternate, setAlternate } = useAnimation("short");

  return (
    <>
      <Animated
        animationIn="animate-fade-in"
        animationOut="animate-fade-out"
        alternate={alternate}
      >
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
