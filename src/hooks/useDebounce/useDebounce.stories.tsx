import React, { useState } from "react";
import { Flex, Text, Field } from "../../components";
import useDebounce from "./useDebounce";
import { fr } from "../../utils";

export default {
  tags: ["autodocs"],
  title: "Hooks/State Management/useDebounce",
  component: useDebounce,
};

export const Default = () => {
  const [value, setValue] = useState("");

  const debounced = useDebounce(value, 1000);

  return (
    <Flex direction="column" gap={fr(5)}>
      <Field value={value} onChange={(e: any) => setValue(e.target.value)} />
      <Text
        cl={(theme) => (theme.mode === "dark" ? ["base", 200] : ["base", 700])}
      >
        {debounced}
      </Text>
    </Flex>
  );
};
