import React, { useState } from "react";
import { Flex, Text, Button } from "../../components";
import usePrevious from "./usePrevious";
import { fr } from "@utils";

export default {
  tags: ["autodocs"],
  title: "Hooks/State Management/usePrevious",
  component: usePrevious,
};

export const Default = () => {
  const [count, setCount] = useState(0);
  const previous = usePrevious(count);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <Flex direction="column" gap={fr(2)}>
      <Text
        cl={(theme) => (theme.mode === "dark" ? ["base", 200] : ["base", 700])}
      >
        Current: {count}
      </Text>
      <Text
        cl={(theme) => (theme.mode === "dark" ? ["base", 200] : ["base", 700])}
      >
        Previous: {previous}
      </Text>
      <Button onClick={() => increment()}>Increment</Button>
    </Flex>
  );
};
