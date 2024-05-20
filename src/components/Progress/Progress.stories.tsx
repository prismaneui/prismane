import React from "react";
// Components
import Progress from "../Progress/Progress";
import Stack from "../Stack/Stack";
// Utils
import { fr } from "../../utils";

export default {
  tags: ["autodocs"],
  title: "Components/Data Display/Progress",
  component: Progress,
};

export const Default = () => {
  return <Progress value={80} />;
};

export const Sizes = () => (
  <Stack gap={fr(5)}>
    <Progress value={30} size="xs" />
    <Progress value={30} size="sm" />
    <Progress value={30} size="base" />
    <Progress value={30} size="md" />
    <Progress value={30} size="lg" />
    <Progress value={30} size="20px" />
  </Stack>
);

export const Color = () => <Progress value={80} color="lime" />;
