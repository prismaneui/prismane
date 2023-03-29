import React, { FC } from "react";
import { Meta } from "@storybook/react";
// Components
import Box from "../components/Box/Box";

export default {
  title: "Box",
  component: Box,
} as Meta;

export const Default: FC = () => {
  return <Box className="w-24 h-24 bg-primary-500"></Box>;
};
