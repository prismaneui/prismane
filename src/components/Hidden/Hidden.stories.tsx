import { FC } from "react";
import { Meta } from "@storybook/react";
// Components
import Hidden from "./Hidden";
import Button from "../Button/Button";

export default {
  title: "Hidden",
  component: Hidden,
} as Meta;

export const Default: FC = () => {
  return (
    <Button>
      Hello <Hidden>world</Hidden>
    </Button>
  );
};
