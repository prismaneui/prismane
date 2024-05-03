import { useState } from "react";
import { Text, Button, Stack } from "../../components";
import useKeyboardShortcut from "./useKeyboardShortcut";

export default {
  tags: ["autodocs"],
  title: "Hooks/User Interface/useKeyboardShortcut",
  component: useKeyboardShortcut,
};

export const Default = () => {
  const [registered, setRegistered] = useState(false);

  useKeyboardShortcut(["shift", "k", "l"], () => {
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

export const Complex = () => {
  const [enabled, setEnabled] = useState(false);

  const [registered, setRegistered] = useState(false);

  useKeyboardShortcut(
    ["shift", "k"],
    () => {
      setRegistered(true);
    },
    enabled
  );

  return (
    <Stack>
      <Button onClick={() => setEnabled(true)}>
        {enabled ? "Enabled" : "Enable Register"}
      </Button>
      <Text
        cl={(theme) => (theme.mode === "dark" ? ["base", 200] : ["base", 700])}
      >
        Registered: {registered.toString()}
      </Text>
    </Stack>
  );
};
