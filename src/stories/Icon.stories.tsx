import React, { FC } from "react";
import { Meta } from "@storybook/react";
import { Eye } from "phosphor-react";
// Components
import Icon from "../components/Icon/Icon";

export default {
  title: "Icon",
  component: Icon,
} as Meta;

const Template = ({ props }) => (
  <div className="flex flex-col gap-2 items-center">
    <Icon size="xs" color="primary">
      <Eye />
    </Icon>
    <Icon size="sm" color="primary">
      <Eye />
    </Icon>
    <Icon size="base" color="primary">
      <Eye />
    </Icon>
    <Icon size="md" color="primary">
      <Eye />
    </Icon>
    <Icon size="lg" color="primary">
      <Eye />
    </Icon>
  </div>
);

export const Default = Template.bind({});
