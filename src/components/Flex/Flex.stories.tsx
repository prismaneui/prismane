import { FC } from "react";
import { Meta } from "@storybook/react";
// Components
import Flex from "./Flex";
// Utils
import { fr } from "../../utils";

export default {
  title: "Flex",
  component: Flex,
} as Meta;

export const Default: FC = () => {
  return (
    <Flex gap={3}>
      <Flex w={fr(12)} h={fr(12)} bg="primary"></Flex>
      <Flex w={fr(12)} h={fr(12)} bg="primary"></Flex>
      <Flex w={fr(12)} h={fr(12)} bg="primary"></Flex>
      <Flex w={fr(12)} h={fr(12)} bg="primary"></Flex>
      <Flex w={fr(12)} h={fr(12)} bg="primary"></Flex>
    </Flex>
  );
};

export const Column: FC = () => {
  return (
    <Flex gap={3} direction="column">
      <Flex w={fr(12)} h={fr(12)} bg="primary"></Flex>
      <Flex w={fr(12)} h={fr(12)} bg="primary"></Flex>
      <Flex w={fr(12)} h={fr(12)} bg="primary"></Flex>
      <Flex w={fr(12)} h={fr(12)} bg="primary"></Flex>
      <Flex w={fr(12)} h={fr(12)} bg="primary"></Flex>
    </Flex>
  );
};

export const Wrap: FC = () => {
  return (
    <Flex gap={3} wrap="wrap" className="w-32">
      <Flex w={fr(12)} h={fr(12)} bg="primary"></Flex>
      <Flex w={fr(12)} h={fr(12)} bg="primary"></Flex>
      <Flex w={fr(12)} h={fr(12)} bg="primary"></Flex>
      <Flex w={fr(12)} h={fr(12)} bg="primary"></Flex>
      <Flex w={fr(12)} h={fr(12)} bg="primary"></Flex>
    </Flex>
  );
};
