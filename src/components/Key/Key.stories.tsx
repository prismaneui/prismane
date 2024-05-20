import React from "react";
// Components
import Key from "./Key";
import Stack from "../Stack/Stack";

export default {
  tags: ["autodocs"],
  title: "Components/Data Display/Key",
  component: Key,
};

export const Default = () => <Key>ctrl</Key>;

export const Modifiers = () => (
  <Stack>
    <span>
      <Key>shift</Key> + <Key>H</Key>
    </span>
    <span>
      <Key>shift</Key> then <Key>M</Key>
    </span>
    <span>
      <Key>shift</Key> or <Key>T</Key>
    </span>
  </Stack>
);
