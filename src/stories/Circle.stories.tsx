import React, { FC } from "react";
import { Meta } from "@storybook/react";
import { Bell } from "phosphor-react";
// Components
import Circle from "../components/Circle/Circle";

export default {
  title: "Circle",
  component: Circle,
} as Meta;

export const Default: FC = () => {
  return (
    <Circle size="100px" className="bg-primary-500">
      <Bell size={24} />
    </Circle>
  );
};
