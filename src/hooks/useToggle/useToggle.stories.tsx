import React from "react";
import { Flex, Text, Button } from "../../components";
import useToggle from "./useToggle";
import { fr } from "@utils";

export default {
  tags: ["autodocs"],
  title: "Hooks/State Management/useToggle",
  component: useToggle,
};

export const Default = () => {
  const [status, toggle] = useToggle(["Active", "Inactive", "Sleep"]);

  return (
    <Flex direction="column" gap={fr(2)}>
      <Text
        cl={(theme) => (theme.mode === "dark" ? ["base", 200] : ["base", 700])}
      >
        Status: {status}
      </Text>
      <Button onClick={() => toggle()}>Toggle Status</Button>
    </Flex>
  );
};
