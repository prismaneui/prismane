// Components
import Key from "./Key";
import Flex from "../Flex/Flex";

export default {
  title: "Key",
  component: Key,
};

export const Default = () => (
  <Flex gap={4} align="center">
    <Key>K</Key> + <Key>Shift</Key>
  </Flex>
);
