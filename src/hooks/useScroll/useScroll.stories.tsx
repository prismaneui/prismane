import { useState } from "react";
import { Flex, Text, Button } from "../../components";
import useScroll from "./useScroll";
import { fr } from "../../utils";

export default {
  title: "useScroll",
  component: useScroll,
};

export const Default = () => {
  const {
    scrollToId,
    scrollDirection,
    scrollPosition,
    scrollToBottom,
    scrollToPosition,
    scrollToTop,
  } = useScroll();

  return (
    <Flex h="3000px" w="2000px" direction="column">
      <Flex gap={fr(2)} wrap="wrap" pos="fixed" t={fr(5)} l={fr(5)}>
        <Button onClick={() => scrollToBottom()}>Scroll To Bottom</Button>
        <Button onClick={() => scrollToTop()}>Scroll To Top</Button>
        <Button onClick={() => scrollToPosition(400, 1200)}>
          Scroll To Position
        </Button>
        <Button onClick={() => scrollToId("element-id")}>
          Scroll To Element
        </Button>
        <Text>Position: {JSON.stringify(scrollPosition)}</Text>
        <Text>Direction: {scrollDirection}</Text>
      </Flex>
      <Flex mt={fr(54)} id="element-id">
        Element With Id
      </Flex>
    </Flex>
  );
};
