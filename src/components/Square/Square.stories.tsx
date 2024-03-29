import React, { FC } from "react";
import { Meta } from "@storybook/react";
import { Bell } from "@phosphor-icons/react";
// Components
import Square from "./Square";

export default {
  title: "Square",
  component: Square,
} as Meta;

export const Default: FC = () => {
  return (
    <Square size={25} bg="primary">
      <Bell size={24} />
    </Square>
  );
};
