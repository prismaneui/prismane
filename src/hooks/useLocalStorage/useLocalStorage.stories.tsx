import React from "react";
import { Flex, Text, Button } from "../../components";
import useLocalStorage from "./useLocalStorage";
import { fr } from "../../utils";

export default {
  tags: ["autodocs"],
  title: "Hooks/State Management/useLocalStorage",
  component: useLocalStorage,
};

export const Default = () => {
  const [count, setCount] = useLocalStorage("count", 0);

  const increment = () => {
    setCount((prevCount: number) => prevCount + 1);
  };

  return (
    <Flex direction="column" gap={fr(2)}>
      <Text
        cl={(theme) => (theme.mode === "dark" ? ["base", 200] : ["base", 700])}
      >
        {count}
      </Text>
      <Button onClick={() => increment()}>Increment</Button>
    </Flex>
  );
};
