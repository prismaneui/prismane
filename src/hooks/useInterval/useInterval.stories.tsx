import React, { useState } from "react";
import { Flex, Text, Button } from "../../components";
import useInterval from "./useInterval";
import { fr } from "@utils";

export default {
  tags: ["autodocs"],
  title: "Hooks/State Management/useInterval",
  component: useInterval,
};

export const Default = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const { start, stop, toggle, active } = useInterval(increment, 1000);

  return (
    <Flex direction="column" gap={fr(2)}>
      <Text
        cl={(theme) => (theme.mode === "dark" ? ["base", 200] : ["base", 700])}
      >
        Counter: {count}
      </Text>
      <Button onClick={start}>Start</Button>
      <Button onClick={stop}>Stop</Button>
      <Button onClick={toggle}>Toggle</Button>
      <Text
        cl={(theme) => (theme.mode === "dark" ? ["base", 200] : ["base", 700])}
      >
        Active: {active.toString()}
      </Text>
    </Flex>
  );
};
