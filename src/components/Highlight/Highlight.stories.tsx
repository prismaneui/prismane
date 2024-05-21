import React from "react";
// Components
import Highlight from "./Highlight";
import Text from "../Text/Text";
// Utils
import { fr } from "@utils";

export default {
  tags: ["autodocs"],
  title: "Components/Typography/Highlight",
  component: Highlight,
};

export const Default = () => {
  return (
    <Text>
      You can <Highlight>highlight</Highlight> this important word!
    </Text>
  );
};

export const Background_Color = () => (
  <Text>
    You can <Highlight bg="lime">highlight</Highlight> this important word!
  </Text>
);

export const Text_Color = () => (
  <Text>
    You can <Highlight cl="lime">highlight</Highlight> this important word!
  </Text>
);

export const Border_Radius = () => (
  <Text>
    You can <Highlight br="full">highlight</Highlight> this important word!
  </Text>
);

export const Advanced_Composition = () => (
  <Text>
    You can{" "}
    <Highlight br="md" bg="teal" px={fr(2)}>
      highlight
    </Highlight>{" "}
    this important word!
  </Text>
);
