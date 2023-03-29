import React, { FC } from "react";
import { Meta } from "@storybook/react";
// Components
import Square from "../components/Square/Square";
import Stack from "../components/Stack/Stack";

export default {
  title: "Stack",
  component: Stack,
} as Meta;

export const Default: FC = () => {
  return (
    <Stack>
      <Square size="100px" className="bg-primary-500">
        1
      </Square>
      <Square size="100px" className="bg-red-500">
        2
      </Square>
      <Square size="100px" className="bg-green-500">
        3
      </Square>
    </Stack>
  );
};

export const Col: FC = () => {
  return (
    <Stack direction="col">
      <Square size="100px" className="bg-primary-500">
        1
      </Square>
      <Square size="100px" className="bg-red-500">
        2
      </Square>
      <Square size="100px" className="bg-green-500">
        3
      </Square>
    </Stack>
  );
};

export const Spacing: FC = () => {
  return (
    <Stack direction="col" gap="20px">
      <Square size="100px" className="bg-primary-500">
        1
      </Square>
      <Square size="100px" className="bg-red-500">
        2
      </Square>
      <Square size="100px" className="bg-green-500">
        3
      </Square>
    </Stack>
  );
};

export const ColReverse: FC = () => {
  return (
    <Stack direction="col-reverse">
      <Square size="100px" className="bg-primary-500">
        1
      </Square>
      <Square size="100px" className="bg-red-500">
        2
      </Square>
      <Square size="100px" className="bg-green-500">
        3
      </Square>
    </Stack>
  );
};

export const RowReverse: FC = () => {
  return (
    <Stack direction="row-reverse">
      <Square size="100px" className="bg-primary-500">
        1
      </Square>
      <Square size="100px" className="bg-red-500">
        2
      </Square>
      <Square size="100px" className="bg-green-500">
        3
      </Square>
    </Stack>
  );
};
