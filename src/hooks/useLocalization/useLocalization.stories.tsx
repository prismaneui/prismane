import { useState } from "react";
import { Flex, Text, Button } from "../../components";
import useLocalization from "./useLocalization";
import { fr } from "../../utils";

export default {
  tags: ["autodocs"],
  title: "Hooks/State Management/useLocalization",
  component: useLocalization,
};

export const Default = () => {
  const [registered, setRegistered] = useState(false);

  const { locale, text, changeLocale } = useLocalization("en", {
    en: "Hello from Bulgaria!",
    bg: "Здравейте, от България!",
  });

  return (
    <Flex direction="column" gap={fr(2)}>
      <Text
        cl={(theme) => (theme.mode === "dark" ? ["base", 200] : ["base", 700])}
      >
        Locale: {locale}
      </Text>
      <Text
        cl={(theme) => (theme.mode === "dark" ? ["base", 200] : ["base", 700])}
      >
        {text}
      </Text>
      <Button onClick={() => changeLocale("bg")}>Change Locale</Button>
    </Flex>
  );
};
