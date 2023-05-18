import { FC } from "react";
import { Meta } from "@storybook/react";
// Components
import CloseButton from "./CloseButton";

export default {
  title: "CloseButton",
  component: CloseButton,
} as Meta;

export const Default: FC = () => {
  return <CloseButton />;
};
