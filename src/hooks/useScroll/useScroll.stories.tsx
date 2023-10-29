import { useState } from "react";
import { Flex, Text, Button, Stack } from "../../components";
import useScroll from "./useScroll";
import { fr } from "../../utils";

export default {
  title: "useScroll",
  component: useScroll,
};

export const Default = () => {
  const {
    direction,
    position,
    scrollToTop,
    scrollToBottom,
    scrollToLeft,
    scrollToRight,
    scrollToPosition,
    scrollToId,
  } = useScroll();

  return (
    <Stack pos="relative" h="100vh" w="100vw">
      <Flex gap={fr(2)} pos="fixed" l={fr(5)} r={fr(5)}>
        <Button onClick={() => scrollToTop()}>Scroll to Top</Button>
        <Button onClick={() => scrollToBottom()}>Scroll to Bottom</Button>
        <Button onClick={() => scrollToLeft()}>Scroll to Left</Button>
        <Button onClick={() => scrollToRight()}>Scroll to Right</Button>
        <Button onClick={() => scrollToPosition(20, 500)}>
          Scroll to Position
        </Button>
        <Button onClick={() => scrollToId("elementId")}>Scroll to ID</Button>
        <Text>Position: {JSON.stringify(position)}</Text>
        <Text>Direction: {direction}</Text>
      </Flex>
      <Flex w="150vw" h="200vh">
        <Flex id="elementId" my={fr(240)}>
          Element with ID
        </Flex>
      </Flex>
    </Stack>
  );
};
