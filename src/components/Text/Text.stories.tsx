import React from "react";
// Components
import Text from "./Text";
import Stack from "../Stack/Stack";

export default {
  tags: ["autodocs"],
  title: "Components/Typography/Text",
  component: Text,
};

export const Default = () => {
  return <Text>Some text</Text>;
};

export const Sizes = () => (
  <Stack>
    <Text fs="xs">(xs) In love with Prismane</Text>
    <Text fs="sm">(sm) In love with Prismane</Text>
    <Text fs="base">(base) In love with Prismane</Text>
    <Text fs="md">(md) In love with Prismane</Text>
    <Text fs="lg">(lg) In love with Prismane</Text>
    <Text fs="xl">(xl) In love with Prismane</Text>
    <Text fs="2xl">(2xl) In love with Prismane</Text>
    <Text fs="3xl">(3xl) In love with Prismane</Text>
    <Text fs="4xl">(4xl) In love with Prismane</Text>
    <Text fs="5xl">(5xl) In love with Prismane</Text>
    <Text fs="6xl">(6xl) In love with Prismane</Text>
    <Text fs="7xl">(7xl) In love with Prismane</Text>
    <Text fs="8xl">(8xl) In love with Prismane</Text>
  </Stack>
);

export const Color = () => (
  <Stack>
    <Text cl="primary">Text with primary color.</Text>
    <Text cl={["base", 400]}>Text with base color, shade 400.</Text>
  </Stack>
);
