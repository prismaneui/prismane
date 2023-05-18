import { FC } from "react";
import { Meta } from "@storybook/react";
// Components
import AspectRatio from "./AspectRatio";

export default {
  title: "AspectRatio",
  component: AspectRatio,
} as Meta;

export const Default: FC = () => {
  return (
    <AspectRatio bg={["primary", 500]} ratio="2/1" size={105}></AspectRatio>
  );
};
