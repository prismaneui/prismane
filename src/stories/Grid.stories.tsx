import React, { FC } from "react";
import { Meta } from "@storybook/react";
// Components
import Grid from "../components/Grid/Grid";

export default {
  title: "Grid",
  component: Grid,
} as Meta;

export const Default: FC = () => {
  return (
    <Grid gap="12px" templateCols={8} templateRows={4} className="h-96 w-96">
      <Grid.Item
        colStart={1}
        colEnd={3}
        rowStart={1}
        rowEnd={2}
        className="bg-primary-500 h-10 w-full"
      ></Grid.Item>
      <Grid.Item
        colStart={3}
        colEnd={8}
        rowStart={1}
        rowEnd={2}
        className="bg-primary-500 h-10 w-full"
      ></Grid.Item>
      <Grid.Item
        colStart={2}
        colEnd={8}
        rowStart={2}
        rowEnd={4}
        className="bg-primary-500 h-10 w-full"
      ></Grid.Item>
    </Grid>
  );
};
