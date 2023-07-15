import React, { FC } from "react";
import { Meta } from "@storybook/react";
// Components
import Square from "../Square/Square";
import Stack from "./Stack";

export default {
  title: "Stack",
  component: Stack,
} as Meta;

export const Default: FC = () => {
  return (
    <Stack>
      <Square size={25} bg="primary">
        1
      </Square>
      <Square size={25} bg="red">
        2
      </Square>
      <Square size={25} bg="green">
        3
      </Square>
    </Stack>
  );
};

export const Col: FC = () => {
  return (
    <Stack direction="row">
      <Square size={25} bg="primary">
        1
      </Square>
      <Square size={25} bg="red">
        2
      </Square>
      <Square size={25} bg="green">
        3
      </Square>
    </Stack>
  );
};

export const Spacing: FC = () => {
  return (
    <Stack direction="column" gap={5}>
      <Square size={25} bg="primary">
        1
      </Square>
      <Square size={25} bg="red">
        2
      </Square>
      <Square size={25} bg="green">
        3
      </Square>
    </Stack>
  );
};

export const ColReverse: FC = () => {
  return (
    <Stack direction="column-reverse">
      <Square size={25} bg="primary">
        1
      </Square>
      <Square size={25} bg="red">
        2
      </Square>
      <Square size={25} bg="green">
        3
      </Square>
    </Stack>
  );
};

export const RowReverse: FC = () => {
  return (
    <Stack direction="row-reverse">
      <Square size={25} bg="primary">
        1
      </Square>
      <Square size={25} bg="red">
        2
      </Square>
      <Square size={25} bg="green">
        3
      </Square>
    </Stack>
  );
};
