import { Flex, Button, Text } from "../../components";
import useCounter from ".";
import { fr } from "../../utils";

export default {
  title: "useCounter",
  component: useCounter,
};

export const Default = () => {
  const { counter, increment, decrement, set } = useCounter();

  return (
    <Flex direction="column" gap={fr(5)}>
      <Flex gap={fr(2)}>
        <Button onClick={() => increment()}>Increment</Button>
        <Button onClick={() => increment(5)}>Increment By Custom Step</Button>
        <Button onClick={() => decrement()}>Decrement</Button>
        <Button onClick={() => decrement(5)}>Decrement By Custom Step</Button>
        <Button onClick={() => set(20)}>Set Custom Value</Button>
      </Flex>
      <Text
        fs="2xl"
        fw="bold"
        cl={(theme) => (theme.mode === "dark" ? ["base", 200] : ["base", 700])}
      >
        {counter}
      </Text>
    </Flex>
  );
};
