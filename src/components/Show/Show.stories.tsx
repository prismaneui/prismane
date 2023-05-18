import React, { FC } from "react";
import { Meta } from "@storybook/react";
// Components
import Show from "./Show";

export default {
  title: "Show",
  component: Show,
} as Meta;

export const Default = () => <Show>Shown</Show>;
