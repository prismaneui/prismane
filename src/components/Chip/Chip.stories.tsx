import React from "react";
import { Hexagon } from "@phosphor-icons/react";
// Components
import Chip from "./Chip";
import Flex from "../Flex/Flex";
// Utils
import { fr } from "../../utils";

export default {
  title: "Chip",
  component: Chip,
};

const Template: any = (args: any) => {
  return (
    <Flex align="center" direction="column" gap={fr(2)}>
      <Flex align="center" gap={fr(2)}>
        <Chip
          onClick={() => {
            alert("Clicked!");
          }}
          icon={<Hexagon />}
          size="xs"
          {...args}
        >
          Example
        </Chip>
        <Chip
          onClick={() => {
            alert("Clicked!");
          }}
          size="xs"
          {...args}
        >
          Example
        </Chip>
      </Flex>
      <Flex align="center" gap={fr(2)}>
        <Chip
          onClick={() => {
            alert("Clicked!");
          }}
          size="sm"
          icon={<Hexagon />}
          {...args}
        >
          Example
        </Chip>
        <Chip
          onClick={() => {
            alert("Clicked!");
          }}
          size="sm"
          {...args}
        >
          Example
        </Chip>
      </Flex>
      <Flex align="center" gap={fr(2)}>
        <Chip
          onClick={() => {
            alert("Clicked!");
          }}
          size="base"
          icon={<Hexagon />}
          {...args}
        >
          Example
        </Chip>
        <Chip
          onClick={() => {
            alert("Clicked!");
          }}
          size="base"
          {...args}
        >
          Example
        </Chip>
      </Flex>
      <Flex align="center" gap={fr(2)}>
        <Chip
          onClick={() => {
            alert("Clicked!");
          }}
          size="md"
          icon={<Hexagon />}
          {...args}
        >
          Example
        </Chip>
        <Chip
          onClick={() => {
            alert("Clicked!");
          }}
          size="md"
          {...args}
        >
          Example
        </Chip>
      </Flex>
      <Flex align="center" gap={fr(2)}>
        <Chip
          onClick={() => {
            alert("Clicked!");
          }}
          size="lg"
          icon={<Hexagon />}
          {...args}
        >
          Example
        </Chip>
        <Chip
          onClick={() => {
            alert("Clicked!");
          }}
          size="lg"
          {...args}
        >
          Example
        </Chip>
      </Flex>
    </Flex>
  );
};

export const Default = Template.bind({});

export const Slate = Template.bind({});

Slate.args = {
  color: "slate",
};

export const Red = Template.bind({});

Red.args = {
  color: "red",
};

export const Orange = Template.bind({});

Orange.args = {
  color: "orange",
};

export const Icon_Position = Template.bind({});

Icon_Position.args = {
  color: "orange",
  iconPosition: "right",
};
