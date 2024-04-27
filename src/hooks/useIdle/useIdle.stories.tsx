import { Box, Text } from "../../components";
import useIdle from "./useIdle";
import { fr } from "../../utils";

export default {
  tags: ["autodocs"],
  title: "Hooks/User Interface/useIdle",
  component: useIdle,
};

export const Default = () => {
  const isIdle = useIdle();

  console.log(isIdle);

  return (
    <Text
      cl={(theme) => (theme.mode === "dark" ? ["base", 200] : ["base", 700])}
    >
      {isIdle.toString()}
    </Text>
  );
};
