import React from "react";
// Components
import Gradient from "./Gradient";
import Stack from "../Stack/Stack";

export default {
  tags: ["autodocs"],
  title: "Components/Data Display/Gradient",
  component: Gradient,
};

export const Default = () => {
  return <Gradient w="100%" h={200} />;
};

export const Colors = () => (
  <Stack>
    <Gradient w="100%" h={200} from="teal" to="amethyst" />
    <Gradient w="100%" h={200} from={["ruby", 300]} to={["purple", 400]} />
  </Stack>
);

export const Degrees = () => (
  <Gradient w="100%" h={200} from="orange" to="lime" deg={45} />
);
