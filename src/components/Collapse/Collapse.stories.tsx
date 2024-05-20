import React, { useState } from "react";
// Components
import Collapse from "../Collapse/Collapse";
import Button from "../Button/Button";
import Stack from "../Stack/Stack";
// Utils
import { fr } from "../../utils";

export default {
  tags: ["autodocs"],
  title: "Components/Data Display/Collapse",
  component: Collapse,
};

export const Default = () => {
  const [open, setOpen] = useState(false);

  return (
    <Stack>
      <Collapse open={open} w={fr(64)}>
        The Collapse component allows dynamic toggling and collapsing of content
        for a more organized and user-friendly experience. Easily control
        visibility and enhance user interactions with this Prismane component.
      </Collapse>
      <Button
        onClick={() => {
          setOpen(!open);
        }}
      >
        {!open ? "Click to expand" : "Click to collapse"}
      </Button>
    </Stack>
  );
};

export const Custom_Transition = () => {
  const [open, setOpen] = useState(false);

  return (
    <Stack>
      <Collapse
        delay={300}
        duration={1500}
        timing="linear"
        open={open}
        w={fr(64)}
      >
        This Collapse component has a customized transition. Toggle it on and
        off to see it.
      </Collapse>
      <Button
        onClick={() => {
          setOpen(!open);
        }}
      >
        {!open ? "Click to expand" : "Click to collapse"}
      </Button>
    </Stack>
  );
};
