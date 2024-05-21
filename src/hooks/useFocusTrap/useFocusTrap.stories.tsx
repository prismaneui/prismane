import React, { useState } from "react";
import { Flex, Button, TextField, Stack } from "../../components";
import useFocusTrap from "./useFocusTrap";
import { fr } from "@utils";

export default {
  tags: ["autodocs"],
  title: "Hooks/User Interface/useFocusTrap",
  component: useFocusTrap,
};

export const Default = () => {
  const ref = useFocusTrap();

  return (
    <Flex direction="column" gap={fr(2)} w="300px">
      <TextField />
      <Stack ref={ref}>
        <TextField placeholder="I should be focused" />
        <TextField />
      </Stack>
    </Flex>
  );
};

export const Toggle_Hook = () => {
  const [open, setOpen] = useState(false);

  const ref = useFocusTrap(open);

  return (
    <Flex direction="column" gap={fr(2)} w="300px">
      <TextField />
      <Stack ref={ref}>
        <TextField placeholder="I should be focused" />
        <TextField />
      </Stack>
      <Button onClick={() => setOpen(!open)}>Toggle Hook</Button>
    </Flex>
  );
};

export const Initial_Focus = () => {
  const ref = useFocusTrap();

  return (
    <Flex direction="column" gap={fr(2)} w="300px">
      <TextField />
      <Stack ref={ref}>
        <TextField placeholder="I am the first, but I am not focused" />
        <TextField placeholder="I should be focused" data-initialfocus />
      </Stack>
    </Flex>
  );
};
