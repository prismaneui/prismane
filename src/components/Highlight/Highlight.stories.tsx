import { FC } from "react";
import { Meta } from "@storybook/react";
// Components
import Highlight from "./Highlight";

export default {
  title: "Highlight",
  component: Highlight,
} as Meta;

export const Default: FC = () => {
  return (
    <span>
      You can <Highlight>highlight</Highlight> words!
    </span>
  );
};
