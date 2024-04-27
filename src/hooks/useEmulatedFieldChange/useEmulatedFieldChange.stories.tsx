import { useState, useRef } from "react";
import { Flex, Text, Box } from "../../components";
import useEmulatedFieldChange from "./useEmulatedFieldChange";
import { fr } from "../../utils";

export default {
  tags: ["autodocs"],
  title: "Hooks/Miscellaneous/useEmulatedFieldChange",
  component: useEmulatedFieldChange,
};

export const Default = () => {
  const ref = useRef(null);

  const dimensions = useEmulatedFieldChange(ref, () => {});

  return (
    <Flex direction="column" gap={fr(5)}>
      <Box w={fr(50)} h={fr(40)} p={fr(5)} m={fr(2)} bg="primary" ref={ref} />
      <Text
        cl={(theme) => (theme.mode === "dark" ? ["base", 200] : ["base", 700])}
      >
        {dimensions && console.log(dimensions)}
      </Text>
    </Flex>
  );
};
