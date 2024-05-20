import React from "react";
// Components
import Paper from "./Paper";

export default {
  tags: ["autodocs"],
  title: "Components/Data Display/Paper",
  component: Paper,
};

export const Default = () => <Paper w={120} h={120} />;

export const Shadow = () => <Paper w={120} h={120} shadow />;

export const Square_Corners = () => <Paper br="none" w={120} h={120} />;

export const Background_Color = () => <Paper bg="base" w={120} h={120} />;
