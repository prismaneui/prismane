import React, { FC } from "react";
import { Meta } from "@storybook/react";
// Components
import Center from "./Center";

export default {
  title: "Center",
  component: Center,
} as Meta;

export const Default: FC = () => {
  return (
    <Center width={96} height={48} bg={["primary", 500]}>
      Hello world
    </Center>
  );
};
