import React from "react";
import { Meta } from "@storybook/react";
import { Pause, ArchiveBox } from "phosphor-react";
// Components
import Button from "../components/Button/Button";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template = (args) => {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col gap-5 w-fit">
        <div className="flex flex-col gap-2">
          <h4>Primary Color</h4>
          <Button {...args}></Button>
        </div>
        <div className="flex flex-col gap-2">
          <h4>Error Color</h4>
          <Button {...args} color="error"></Button>
        </div>
        <div className="flex flex-col gap-2">
          <h4>Warning Color</h4>
          <Button {...args} color="warning"></Button>
        </div>
        <div className="flex flex-col gap-2">
          <h4>Success Color</h4>
          <Button {...args} color="success"></Button>
        </div>
        <div className="flex flex-col gap-2">
          <h4>Info Color</h4>
          <Button {...args} color="info"></Button>
        </div>
        <div className="flex flex-col gap-2">
          <h4>Base Color</h4>
          <Button {...args} color="base"></Button>
        </div>
      </div>
      {args.action !== true && (
        <div className="flex flex-col gap-5 w-fit">
          <div className="flex flex-col gap-2">
            <h4>Primary With Icon</h4>
            <Button {...args} icon={<ArchiveBox />}></Button>
          </div>
          <div className="flex flex-col gap-2">
            <h4>Error With Icon</h4>
            <Button {...args} color="error" icon={<ArchiveBox />}></Button>
          </div>
          <div className="flex flex-col gap-2">
            <h4>Warning With Icon</h4>
            <Button {...args} color="warning" icon={<ArchiveBox />}></Button>
          </div>
          <div className="flex flex-col gap-2">
            <h4>Success With Icon</h4>
            <Button {...args} color="success" icon={<ArchiveBox />}></Button>
          </div>
          <div className="flex flex-col gap-2">
            <h4>Info With Icon</h4>
            <Button {...args} color="info" icon={<ArchiveBox />}></Button>
          </div>
          <div className="flex flex-col gap-2">
            <h4>Base With Icon</h4>
            <Button {...args} color="base" icon={<ArchiveBox />}></Button>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-5 w-fit">
        <div className="flex flex-col gap-2">
          <h4>Primary Loading</h4>
          <Button {...args} loading></Button>
        </div>
        <div className="flex flex-col gap-2">
          <h4>Error Loading</h4>
          <Button {...args} color="error" loading></Button>
        </div>
        <div className="flex flex-col gap-2">
          <h4>Warning Loading</h4>
          <Button {...args} color="warning" loading></Button>
        </div>
        <div className="flex flex-col gap-2">
          <h4>Success Loading</h4>
          <Button {...args} color="success" loading></Button>
        </div>
        <div className="flex flex-col gap-2">
          <h4>Info Loading</h4>
          <Button {...args} color="info" loading></Button>
        </div>
        <div className="flex flex-col gap-2">
          <h4>Base Loading</h4>
          <Button {...args} color="base" loading></Button>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-fit">
        <div className="flex flex-col gap-2">
          <h4>Primary Disabled</h4>
          <Button {...args} disabled></Button>
        </div>
        <div className="flex flex-col gap-2">
          <h4>Error Disabled</h4>
          <Button {...args} color="error" disabled></Button>
        </div>
        <div className="flex flex-col gap-2">
          <h4>Warning Disabled</h4>
          <Button {...args} color="warning" disabled></Button>
        </div>
        <div className="flex flex-col gap-2">
          <h4>Success Disabled</h4>
          <Button {...args} color="success" disabled></Button>
        </div>
        <div className="flex flex-col gap-2">
          <h4>Info Disabled</h4>
          <Button {...args} color="info" disabled></Button>
        </div>
        <div className="flex flex-col gap-2">
          <h4>Base Disabled</h4>
          <Button {...args} color="base" disabled></Button>
        </div>
      </div>
    </div>
  );
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
  round: true,
};

export const SecondaryRound = Template.bind({});

SecondaryRound.args = {
  variant: "secondary",
  children: "Secondary Round",
  round: true,
};

export const TextRound = Template.bind({});

TextRound.args = {
  variant: "text",
  children: "Text Round",
  round: true,
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
  round: true,
};

export const ActionSecondaryRound = Template.bind({});

ActionSecondaryRound.args = {
  variant: "secondary",
  icon: <Pause />,
  action: true,
  round: true,
};

export const ActionTextRound = Template.bind({});

ActionTextRound.args = {
  variant: "text",
  icon: <Pause />,
  action: true,
  round: true,
};
