import { Flex, Text } from "../components";
import useColor from "./useColor";
import { fr } from "../utils";

export default {
  title: "useColor",
  component: useColor,
};

export const Default = () => {
  const { getColor, getColorStyle } = useColor();

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
        {getColorStyle("primary", 200)}
      </Text>
    </Flex>
  );
};
