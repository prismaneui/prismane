import React from "react";
import { Flex, Text } from "../../..";
import usePrismaneColor from "../usePrismaneColor/usePrismaneColor";
import { fr } from "@utils";

export default {
  tags: ["autodocs"],
  title: "Theming/usePrismaneColor",
  component: usePrismaneColor,
};

export const Default = () => {
  const { getColor, getColorStyle } = usePrismaneColor();

  return (
    <Flex direction="column" gap={fr(5)}>
      <Text
        cl={(theme) => (theme.mode === "dark" ? ["base", 200] : ["base", 700])}
      >
        {getColor("primary")}
      </Text>
      <Text
        cl={(theme) => (theme.mode === "dark" ? ["base", 200] : ["base", 700])}
      >
        {getColor("primary", 200)}
      </Text>
      <Text
        cl={(theme) => (theme.mode === "dark" ? ["base", 200] : ["base", 700])}
      >
        {getColorStyle("primary")}
      </Text>
      <Text
        cl={(theme) => (theme.mode === "dark" ? ["base", 200] : ["base", 700])}
      >
        {getColorStyle(["primary", 200])}
      </Text>
    </Flex>
  );
};
