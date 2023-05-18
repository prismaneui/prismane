import React, { FC } from "react";
import { Meta } from "@storybook/react";
import { Bell } from "@phosphor-icons/react";
// Components
import Circle from "./Circle";

export default {
  title: "Circle",
  component: Circle,
} as Meta;

export const Default: FC = () => {
  return (
    <Circle size={50} bg="primary">
      <Bell size={24} />
    </Circle>
  );
};
