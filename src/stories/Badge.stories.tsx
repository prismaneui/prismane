import React from "react";
// Components
import Badge from "../components/Badge/Badge";

export default {
  label: "Badge",
  component: Badge,
};

const Template = (args) => {
  return (
    <div className="flex w-full h-52 m-20 gap-5">
      <div className="flex flex-col w-fit justify-center items-center gap-2">
        <Badge label={4} {...args} position="left-start">
          <div className="w-8 h-8 bg-base-700 dark:bg-base-200"></div>
        </Badge>
        <Badge label={4} {...args} position="left">
          <div className="w-8 h-8 bg-base-700 dark:bg-base-200"></div>
        </Badge>
        <Badge label={4} {...args} position="left-end">
          <div className="w-8 h-8 bg-base-700 dark:bg-base-200"></div>
        </Badge>
      </div>
      <div className="flex flex-col h-full w-fit justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          <Badge label={4} {...args} position="top-start">
            <div className="w-8 h-8 bg-base-700 dark:bg-base-200"></div>
          </Badge>
          <Badge label={4} {...args} position="top">
            <div className="w-8 h-8 bg-base-700 dark:bg-base-200"></div>
          </Badge>
          <Badge label={4} {...args} position="top-end">
            <div className="w-8 h-8 bg-base-700 dark:bg-base-200"></div>
          </Badge>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Badge label={4} {...args} position="bottom-start">
            <div className="w-8 h-8 bg-base-700 dark:bg-base-200"></div>
          </Badge>
          <Badge label={4} {...args} position="bottom">
            <div className="w-8 h-8 bg-base-700 dark:bg-base-200"></div>
          </Badge>
          <Badge label={4} {...args} position="bottom-end">
            <div className="w-8 h-8 bg-base-700 dark:bg-base-200"></div>
          </Badge>
        </div>
      </div>
      <div className="flex flex-col w-fit justify-center items-center gap-2">
        <Badge label={4} {...args} position="right-start">
          <div className="w-8 h-8 bg-base-700 dark:bg-base-200"></div>
        </Badge>
        <Badge label={4} {...args} position="right">
          <div className="w-8 h-8 bg-base-700 dark:bg-base-200"></div>
        </Badge>
        <Badge label={4} {...args} position="right-end">
          <div className="w-8 h-8 bg-base-700 dark:bg-base-200"></div>
        </Badge>
      </div>
    </div>
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
