import { Meta } from "@storybook/react";
import { Pause, ArchiveBox } from "@phosphor-icons/react";
// Components
import Button from "./Button";
import Flex from "../Flex/Flex";
// Utils
import { fr } from "../../utils";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: any = (args: any) => {
  return (
    <Flex gap={fr(5)}>
      <Button {...args}></Button>
      {args.action !== true && (
        <Button {...args} icon={<ArchiveBox />}></Button>
      )}
      <Button {...args} loading></Button>
      <Button {...args} disabled></Button>
    </Flex>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  variant: "primary",
  children: "Primary",
  shadow: true,
};

export const Secondary = Template.bind({});

Secondary.args = {
  variant: "secondary",
  children: "Secondary",
};

export const Tertiary = Template.bind({});

Tertiary.args = {
  variant: "tertiary",
  children: "Tertiary",
};

export const Text = Template.bind({});

Text.args = {
  variant: "text",
  children: "Text",
};

export const PrimaryRound = Template.bind({});

PrimaryRound.args = {
  variant: "primary",
  children: "Primary Round",
  br: "full",
};

export const SecondaryRound = Template.bind({});

SecondaryRound.args = {
  variant: "secondary",
  children: "Secondary Round",
  br: "full",
};

export const TextRound = Template.bind({});

TextRound.args = {
  variant: "text",
  children: "Text Round",
  br: "full",
};

export const ActionPrimary = Template.bind({});

ActionPrimary.args = {
  variant: "primary",
  icon: <Pause />,
  action: true,
};

export const ActionSecondary = Template.bind({});

ActionSecondary.args = {
  variant: "secondary",
  icon: <Pause />,
  action: true,
};

export const ActionText = Template.bind({});

ActionText.args = {
  variant: "text",
  icon: <Pause />,
  action: true,
};

export const ActionPrimaryRound = Template.bind({});

ActionPrimaryRound.args = {
  variant: "primary",
  icon: <Pause />,
  action: true,
  br: "full",
};

export const ActionSecondaryRound = Template.bind({});

ActionSecondaryRound.args = {
  variant: "secondary",
  icon: <Pause />,
  action: true,
  br: "full",
};

export const ActionTextRound = Template.bind({});

ActionTextRound.args = {
  variant: "text",
  icon: <Pause />,
  action: true,
  br: "full",
};
