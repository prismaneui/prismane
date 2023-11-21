import { FC } from "react";
import { Meta } from "@storybook/react";
// Components
import Main from "./Main";

export default {
  title: "Main",
  component: Main,
} as Meta;

export const Default: FC = () => {
  return <Main>Main</Main>;
};
