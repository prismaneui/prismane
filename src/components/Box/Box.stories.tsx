import { FC } from "react";
import { Meta } from "@storybook/react";
// Components
import Box from "./Box";
import Center from "../Center/Center";
import Button from "../Button/Button";

export default {
  title: "Box",
  component: Box,
} as Meta;

export const Default: FC = () => {
  return <Box w={24} h={24} bg="primary"></Box>;
};

export const Fractional: FC = () => {
  return (
    <Center w={120} h={120} bg="red">
      <Box w={"1/2"} h={"1/2"} bg="primary"></Box>
    </Center>
  );
};

export const Full: FC = () => {
  return (
    <Center w={120} h={120} bg="red">
      <Box w="100%" h="100%" bg="primary"></Box>
    </Center>
  );
};

export const String: FC = () => {
  return (
    <Center w={120} h={120} bg="red">
      <Box w={"auto"} h={"auto"} bg="primary">
        da
      </Box>
    </Center>
  );
};

export const Custom: FC = () => {
  return (
    <Center w={120} h={120} bg="red">
      <Box as={Button}>da</Box>
    </Center>
  );
};

export const PrismaneColors: FC = () => {
  return (
    <Box cl={["diamond", 800, 0.8]} bg={["base", 500, 0.5]} p={10}>
      da
    </Box>
  );
};

export const Pseudo: FC = () => {
  return (
    <Box
      cl={["pink", 600]}
      bg={[["base", 700], { hover: ["base", 900] }]}
      p={[20, { hover: 40 }]}
      br={["xs", { hover: "lg" }]}
      sx={{
        transition: "ease-in 0.2s",
        opacity: ["75%", { hover: "100%" }],
        cursor: ["pointer", { hover: "not-allowed", active: "wait" }],
      }}
    >
      da
    </Box>
  );
};
