import React from "react";
import { Flex, TextField, List } from "../../components";
import useSearch from "./useSearch";
import { fr } from "../../utils";

export default {
  tags: ["autodocs"],
  title: "Hooks/State Management/useSearch",
  component: useSearch,
};

export const Default = () => {
  const { query, setQuery, filtered } = useSearch<string>([
    "apple",
    "banana",
    "cherry",
    "date",
    "fig",
  ]);

  return (
    <Flex direction="column" gap={fr(4)} w={fr(96)}>
      <TextField
        placeholder="Search..."
        value={query}
        onChange={(e: any) => setQuery(e.target.value)}
      />
      <List>
        {filtered.map((item, index) => (
          <List.Item key={index}>{item}</List.Item>
        ))}
      </List>
    </Flex>
  );
};
