import React from "react";
import { Hexagon } from "phosphor-react";
// Components
import Chip from "../components/Chip/Chip";

export default {
  title: "Chip",
  component: Chip,
};

const Template = (args) => {
  return (
    <Chip
      onClick={() => {
        alert("Clicked!");
      }}
      icon={<Hexagon size={16} />}
      {...args}
    >
      Example
    </Chip>
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

export const Sky = Template.bind({});

Sky.args = {
  color: "sky",
};

export const Indigo = Template.bind({});

Indigo.args = {
  color: "indigo",
};

export const Pink = Template.bind({});

Pink.args = {
  color: "pink",
};

export const Base = Template.bind({});

Base.args = {
  color: "base",
};
