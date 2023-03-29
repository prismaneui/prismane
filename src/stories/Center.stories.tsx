import React, { FC } from "react";
import { Meta } from "@storybook/react";
// Components
import Center from "../components/Center/Center";

export default {
  title: "Center",
  component: Center,
} as Meta;

export const Default: FC = () => {
  return <Center className="w-96 h-48 bg-primary-500">Hello world</Center>;
};
