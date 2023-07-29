import React, { FC } from "react";
import { Meta } from "@storybook/react";
// Components
import Text from "./Text";
import Stack from "../Stack/Stack";

export default {
  title: "Text",
  component: Text,
} as Meta;

export const Default: FC = () => {
  return (
    <Stack>
      <Text fs="xs">Hello world</Text>
      <Text fs="sm">Hello world</Text>
      <Text fs="base">Hello world</Text>
      <Text fs="md">Hello world</Text>
      <Text fs="lg">Hello world</Text>
      <Text fs="xl">Hello world</Text>
      <Text fs="2xl">Hello world</Text>
      <Text fs="3xl">Hello world</Text>
      <Text fs="4xl">Hello world</Text>
      <Text fs="5xl">Hello world</Text>
      <Text fs="6xl">Hello world</Text>
      <Text fs="7xl">Hello world</Text>
      <Text fs="8xl">Hello world</Text>
    </Stack>
  );
};
