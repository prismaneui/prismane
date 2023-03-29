import React, { FC } from "react";
import { Meta } from "@storybook/react";
// Components
import Hidden from "../components/Hidden/Hidden";
import Button from "../components/Button/Button";

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
