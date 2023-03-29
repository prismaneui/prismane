import React, { FC } from "react";
import { Meta } from "@storybook/react";
// Components
import Text from "../components/Text/Text";

export default {
  title: "Text",
  component: Text,
} as Meta;

export const Default: FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <Text size="xs">Hello world</Text>
      <Text size="sm">Hello world</Text>
      <Text size="base">Hello world</Text>
      <Text size="md">Hello world</Text>
      <Text size="lg">Hello world</Text>
      <Text size="xl">Hello world</Text>
      <Text size="2xl">Hello world</Text>
      <Text size="3xl">Hello world</Text>
      <Text size="4xl">Hello world</Text>
      <Text size="5xl">Hello world</Text>
      <Text size="6xl">Hello world</Text>
      <Text size="7xl">Hello world</Text>
      <Text size="8xl">Hello world</Text>
    </div>
  );
};
