import { useState } from "react";
// Components
import Progress from "../Progress/Progress";
import Flex from "../Flex/Flex";
// Utils
import { fr } from "../../utils";

export default {
  title: "Progress",
  component: Progress,
};

export const Default = () => {
  const [value, setValue] = useState(0);

  return (
    <Flex direction="column" gap={fr(4)} w={fr(150)}>
      <Progress value={75} label={`${value}%`} size="xs" />
      <Progress value={75} label={`${value}%`} size="sm" />
      <Progress value={75} label={`${value}%`} size="base" />
      <Progress value={75} label={`${value}%`} size="md" />
      <Progress value={75} label={`${value}%`} size="lg" />
    </Flex>
  );
};
