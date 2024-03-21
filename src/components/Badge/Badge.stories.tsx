import { useState } from "react";
// Components
import Badge from "./Badge";
import Flex from "../Flex/Flex";
import Stack from "../Stack";
import Radio from "../Radio";
// Utils
import { fr } from "../../utils";

export default {
  title: "Badge",
  component: Badge,
};

const Template: any = (args: any) => {
  const [position, setPosition] = useState("top");

  const [point, setPoint] = useState("end");

  return (
    <Stack gap={fr(8)} align="center">
      <Flex gap={fr(10)}>
        <Badge
          label={1}
          {...args}
          position={point !== "middle" ? `${position}-${point}` : position}
          size="xs"
        >
          <Flex w={fr(8)} h={fr(8)} bg={["primary", 500]}></Flex>
        </Badge>
        <Badge
          label={1}
          {...args}
          position={point !== "middle" ? `${position}-${point}` : position}
          size="sm"
        >
          <Flex w={fr(8)} h={fr(8)} bg={["primary", 500]}></Flex>
        </Badge>
        <Badge
          label={1}
          {...args}
          position={point !== "middle" ? `${position}-${point}` : position}
          size="base"
        >
          <Flex w={fr(8)} h={fr(8)} bg={["primary", 500]}></Flex>
        </Badge>
        <Badge
          label={1}
          {...args}
          position={point !== "middle" ? `${position}-${point}` : position}
          size="md"
        >
          <Flex w={fr(8)} h={fr(8)} bg={["primary", 500]}></Flex>
        </Badge>
        <Badge
          label={1}
          {...args}
          position={point !== "middle" ? `${position}-${point}` : position}
          size="lg"
        >
          <Flex w={fr(8)} h={fr(8)} bg={["primary", 500]}></Flex>
        </Badge>
      </Flex>
      <Radio.Group
        value={position}
        onChange={(e: any) => setPosition(e.target.value)}
      >
        <Radio label="Top" value="top" />
        <Radio label="Bottom" value="bottom" />
        <Radio label="Left" value="left" />
        <Radio label="Right" value="right" />
      </Radio.Group>
      <Radio.Group
        value={point}
        onChange={(e: any) => setPoint(e.target.value)}
      >
        <Radio label="Start" value="start" />
        <Radio label="Middle (e.g. right, left)" value="middle" />
        <Radio label="End" value="end" />
      </Radio.Group>
    </Stack>
  );
};

export const Default = Template.bind({});

Default.args = {
  color: "primary",
  size: "base",
};

export const Slate = Template.bind({});

Slate.args = {
  color: "slate",
};

export const Red = Template.bind({});

Red.args = {
  color: "red",
};

export const Orange = Template.bind({});

Orange.args = {
  color: "orange",
};

export const Green = Template.bind({});

Green.args = {
  color: "green",
};
