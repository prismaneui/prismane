import React from "react";
import { Wrench } from "@phosphor-icons/react";
// Components
import Circle from "./Circle";
// Utils
import { fr } from "@utils";

export default {
  tags: ["autodocs"],
  title: "Components/Layout/Circle",
  component: Circle,
};

export const Default = () => {
  return (
    <Circle size={fr(10)} bg="primary">
      <Wrench size={24} />
    </Circle>
  );
};
