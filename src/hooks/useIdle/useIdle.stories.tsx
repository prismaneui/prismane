import { Box, Text } from "../../components";
import useIdle from ".";
import { fr } from "../../utils";

export default {
  title: "useIdle",
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
