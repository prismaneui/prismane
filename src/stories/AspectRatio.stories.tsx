import React, { FC } from "react";
import { Meta } from "@storybook/react";
// Components
import AspectRatio from "../components/AspectRatio/AspectRatio";

export default {
  title: "AspectRatio",
  component: AspectRatio,
} as Meta;

export const Default: FC = () => {
  return (
    <AspectRatio
      className="bg-primary-500"
      ratio="2/1"
      width="420px"
    ></AspectRatio>
  );
};
