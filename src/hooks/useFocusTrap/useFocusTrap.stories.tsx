import { Flex, Text, TextField, Stack } from "../../components";
import useFocusTrap from "./useFocusTrap";
import { fr } from "../../utils";

export default {
  title: "useFocusTrap",
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
