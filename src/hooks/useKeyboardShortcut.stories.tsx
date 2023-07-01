import { useState } from "react";
import { Flex, Text, Button } from "../components";
import useKeyboardShortcut from "./useKeyboardShortcut";
import { fr } from "../utils";

export default {
  title: "useKeyboardShortcut",
  component: useKeyboardShortcut,
};

export const Default = () => {
  const [registered, setRegistered] = useState(false);

  useKeyboardShortcut(["shift", "k"], () => {
    setRegistered(true);
  });

  return (
    <Text
      cl={(theme) => (theme.mode === "dark" ? ["base", 200] : ["base", 700])}
    >
      Registered: {registered.toString()}
    </Text>
  );
};
