import { useState } from "react";
// Components
import { Stack, Button, Text } from "../../components";
// Hooks
import useMemoization from ".";

export default {
  title: "useMemoization",
  component: useMemoization,
};

export const Default = () => {
  const { memoize, clear } = useMemoization();

  const [value, setValue] = useState("");

  const [computed, setComputed] = useState(0);

  const expensiveFunction = memoize((pk, pv) => {
    setComputed((pc: number) => pc + 1);
    return pv + 1;
  });

  const handleClick = () => {
    const result = expensiveFunction("number", 5);
    setValue(result);
  };

  return (
    <Stack>
      <Text>Value from cache: {value}</Text>
      <Text>Times computed: {computed}</Text>
      <Button onClick={handleClick}>Calculate</Button>
      <Button onClick={() => clear()}>Clear Cache</Button>
    </Stack>
  );
};
