import React from "react";
import { Meta } from "@storybook/react";
import { Pause } from "phosphor-react";
// Components
import Button from "../components/Button/Button";
// Theme
import T from "../themes";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template = (args) => {
  T.applyTheme(T.createTheme(T.base));

  return <Button {...args}></Button>;
};

export const Primary = Template.bind({});

Primary.args = {
  variant: "primary",
  children: "Primary",
};

export const Secondary = Template.bind({});

Secondary.args = {
  variant: "secondary",
  children: "Secondary",
};

export const Text = () => <Button variant="text">Text</Button>;

export const PrimaryRound = () => (
  <Button variant="primary" round>
    Primary
  </Button>
);

export const SecondaryRound = () => (
  <Button variant="secondary" round>
    Secondary
  </Button>
);

export const TextRound = () => (
  <Button variant="text" round>
    Text
  </Button>
);

export const ActionPrimary = () => (
  <Button variant="primary" icon={<Pause />} action />
);

export const ActionSecondary = () => (
  <Button variant="secondary" icon={<Pause />} action />
);

export const ActionText = () => (
  <Button variant="text" icon={<Pause />} action />
);

export const ActionPrimaryRound = () => (
  <Button variant="primary" icon={<Pause />} action round />
);

export const ActionSecondaryRound = () => (
  <Button variant="secondary" icon={<Pause />} action round />
);

export const ActionTextRound = () => (
  <Button variant="text" icon={<Pause />} action round />
);
