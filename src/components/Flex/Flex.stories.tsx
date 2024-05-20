import React from "react";
// Components
import Flex from "./Flex";

export default {
  tags: ["autodocs"],
  title: "Components/Layout/Flex",
  component: Flex,
};

export const Default = () => {
  return (
    <Flex>
      <Flex bg="base" w={120}>
        1
      </Flex>
      <Flex bg="base" w={120}>
        2
      </Flex>
      <Flex bg="base" w={120}>
        3
      </Flex>
    </Flex>
  );
};

export const Gap = () => {
  return (
    <Flex gap={10} h={100}>
      <Flex bg="base" w={120}>
        1
      </Flex>
      <Flex bg="base" w={120}>
        2
      </Flex>
      <Flex bg="base" w={120}>
        3
      </Flex>
    </Flex>
  );
};

export const Justify = () => (
  <Flex h={100} justify="between" w="100%">
    <Flex bg="base" w={120}>
      1
    </Flex>
    <Flex bg="base" w={120}>
      2
    </Flex>
    <Flex bg="base" w={120}>
      3
    </Flex>
  </Flex>
);

export const Direction = () => (
  <Flex gap={10} direction="column">
    <Flex bg="base" w={120} h={100}>
      1
    </Flex>
    <Flex bg="base" w={120} h={100}>
      2
    </Flex>
    <Flex bg="base" w={120} h={100}>
      3
    </Flex>
  </Flex>
);

export const Grow = () => (
  <Flex h={100} w="100%">
    <Flex bg="ruby" w={120}>
      1
    </Flex>
    <Flex bg="orange" w={120} grow>
      2
    </Flex>
  </Flex>
);
