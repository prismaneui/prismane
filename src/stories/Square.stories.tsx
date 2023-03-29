import React, { FC } from "react";
import { Meta } from "@storybook/react";
import { Bell } from "phosphor-react";
// Components
import Square from "../components/Square/Square";

export default {
  title: "Square",
  component: Square,
} as Meta;

export const Default: FC = () => {
  return (
    <Square size="100px" className="bg-primary-500">
      <Bell size={24} />
    </Square>
  );
};
