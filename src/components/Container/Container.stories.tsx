import { FC } from "react";
import { Meta } from "@storybook/react";
// Components
import Container from "./Container";
import Center from "../Center/Center";
import Flex from "../Flex/Flex";
// Utils
import { fr } from "../../utils";

export default {
  title: "Container",
  component: Container,
} as Meta;

export const Default: FC = () => {
  return (
    <Flex justify="center" align="center" w="100vw" h="100vh">
      <Container bdw={1} bdc="red">
        <Center bg="primary" w={fr(24)}>
          Hello World
        </Center>
      </Container>
    </Flex>
  );
};

export const Fixed: FC = () => {
  return (
    <Flex justify="center" align="center" w="100vw" h="100vh">
      <Container bdw={1} bdc="red" maxSize="base">
        <Center bg="primary" w={fr(24)}>
          Hello World
        </Center>
      </Container>
    </Flex>
  );
};
