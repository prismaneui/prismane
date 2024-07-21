import { Flex, Button, Text } from "../../components";
import useCopyToClipboard from "./useCopyToClipboard";
import { fr } from "../../utils";

export default {
  tags: ["autodocs"],
  title: "Hooks/State Management/useCopyToClipboard",
  component: useCopyToClipboard,
};

export const Default = () => {
  const [value, copyToClipboard] = useCopyToClipboard();

  return (
    <Flex direction="column" gap={fr(5)} align="center">
      <Text
        as="h1"
        cl={(theme) => (theme.mode === "dark" ? ["base", 200] : ["base", 700])}
      >
        Click to copy:
      </Text>
      <Flex gap={fr(3)}>
        <Button onClick={() => copyToClipboard("A")}>A</Button>
        <Button onClick={() => copyToClipboard("B")}>B</Button>
        <Button onClick={() => copyToClipboard("C")}>C</Button>
      </Flex>
      <Text
        fs="xl"
        cl={(theme) => (theme.mode === "dark" ? ["base", 200] : ["base", 700])}
      >
        Copied value: {value ?? "Nothing is copied yet!"}
      </Text>
    </Flex>
  );
};
