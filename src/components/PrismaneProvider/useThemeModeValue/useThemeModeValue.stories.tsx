// Components
import Center from "../../Center";
import Button from "../../Button";
// Hooks
import { usePrismaneTheme } from "../PrismaneContext";
import useThemeModeValue from "./useThemeModeValue";

export default {
  tags: ["autodocs"],
  title: "Theming/useThemeModeValue",
  component: useThemeModeValue,
};

export const Default = () => {
  const { toggleThemeMode } = usePrismaneTheme();

  const background = useThemeModeValue(["base", 300], ["base", 900]);

  return (
    <Center w="100vw" h="100vh" bg={background}>
      <Button onClick={toggleThemeMode}>Toggle Theme Mode</Button>
    </Center>
  );
};
