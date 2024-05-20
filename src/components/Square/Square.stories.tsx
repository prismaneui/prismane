import React from "react";
import { Wrench } from "@phosphor-icons/react";
// Components
import Square from "./Square";
// Utils
import { fr } from "../../utils";

export default {
  tags: ["autodocs"],
  title: "Components/Layout/Square",
  component: Square,
};

export const Default = () => {
  return (
    <Square size={fr(10)} bg="primary">
      <Wrench size={24} />
    </Square>
  );
};
