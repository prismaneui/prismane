import React from "react";
import { Heart, SquaresFour, Wrench } from "@phosphor-icons/react";
// Components
import Icon from "./Icon";

export default {
  tags: ["autodocs"],
  title: "Components/Data Display/Icon",
  component: Icon,
};

export const Default = () => (
  <Icon>
    <Heart />
  </Icon>
);

export const Sizes = () => (
  <>
    <Icon size="xs">
      <SquaresFour />
    </Icon>
    <Icon size="sm">
      <SquaresFour />
    </Icon>
    <Icon size="base">
      <SquaresFour />
    </Icon>
    <Icon size="md">
      <SquaresFour />
    </Icon>
    <Icon size="lg">
      <SquaresFour />
    </Icon>
    <Icon size="52px">
      <SquaresFour />
    </Icon>
  </>
);

export const Frame = () => (
  <Icon size="lg" bg="primary" cl="white" br={5}>
    <Wrench size={24} />
  </Icon>
);
