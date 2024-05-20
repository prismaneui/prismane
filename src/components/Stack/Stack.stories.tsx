import React from "react";
// Components
import Stack from "./Stack";
import Button from "../Button/Button";
// Utils
import { fr } from "../../utils";

export default {
  tags: ["autodocs"],
  title: "Components/Data Display/Stack",
  component: Stack,
};

export const Default = () => {
  return (
    <Stack>
      <Button color="base" full>
        1
      </Button>
      <Button color="base" full>
        2
      </Button>
      <Button color="base" full>
        3
      </Button>
    </Stack>
  );
};

export const Gap = () => (
  <Stack gap={fr(8)}>
    <Button color="base" full>
      1
    </Button>
    <Button color="base" full>
      2
    </Button>
    <Button color="base" full>
      3
    </Button>
  </Stack>
);

export const Horizontal = () => (
  <Stack direction="row">
    <Button color="base" full>
      1
    </Button>
    <Button color="base" full>
      2
    </Button>
    <Button color="base" full>
      3
    </Button>
  </Stack>
);
