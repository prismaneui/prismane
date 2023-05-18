import { useState } from "react";
import { Meta } from "@storybook/react";
// Components
import Collapse from "../Collapse/Collapse";
import Button from "../Button/Button";
import Flex from "../Flex/Flex";
// Utils
import { fr } from "../../utils";

export default {
  title: "Collapse",
  component: Collapse,
} as Meta;

export const Default = () => {
  const [open, setOpen] = useState(false);

  return (
    <Flex direction="column" gap={10}>
      <Collapse open={open} w={fr(64)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nam,
        ullam, natus qui facilis voluptatum quibusdam explicabo doloremque
        maxime architecto dicta error! Voluptas obcaecati fugiat nihil culpa
        laudantium quae quos.
      </Collapse>
      <Button
        onClick={() => {
          setOpen(!open);
        }}
      >
        Toggle
      </Button>
    </Flex>
  );
};
