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
    <Flex align="center" gap={fr(2)}>
      <Chip
        onClick={() => {
          alert("Clicked!");
        }}
        icon={<Hexagon />}
        {...args}
      >
        Example
      </Chip>
      <Chip
        onClick={() => {
          alert("Clicked!");
        }}
        {...args}
      >
        Example
      </Chip>
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

export const Green = Template.bind({});

Green.args = {
  color: "green",
};
