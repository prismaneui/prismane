import React, { useState } from "react";
// Components
import Transition from "./Transition";
import Button from "../Button/Button";
import Stack from "../Stack/Stack";
import Radio from "../Radio/Radio";
// Utils
import { fr } from "@utils";

export default {
  tags: ["autodocs"],
  title: "Components/Miscellaneous/Transition",
  component: Transition,
};

export const Default = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <Stack gap={fr(4)}>
      <Transition
        w={fr(30)}
        h={fr(30)}
        br={toggled ? "full" : "lg"}
        bg={toggled ? "base" : "primary"}
        ml={toggled ? fr(16) : 0}
      />
      <Button onClick={() => setToggled(!toggled)}>Toggle Properties</Button>
    </Stack>
  );
};

export const Delay = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <Stack gap={fr(4)}>
      <Transition
        delay={500}
        w={fr(30)}
        h={fr(30)}
        br={toggled ? "full" : "lg"}
        bg={toggled ? "base" : "primary"}
        ml={toggled ? fr(16) : 0}
      />
      <Button onClick={() => setToggled(!toggled)}>Toggle Properties</Button>
    </Stack>
  );
};

export const Duration = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <Stack gap={fr(4)}>
      <Transition
        duration={1000}
        w={fr(30)}
        h={fr(30)}
        br={toggled ? "full" : "lg"}
        bg={toggled ? "base" : "primary"}
        ml={toggled ? fr(16) : 0}
      />
      <Button onClick={() => setToggled(!toggled)}>Toggle Properties</Button>
    </Stack>
  );
};

export const Timing = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <Stack gap={fr(4)}>
      <Transition
        timing="linear"
        w={fr(30)}
        h={fr(30)}
        br={toggled ? "full" : "lg"}
        bg={toggled ? "base" : "primary"}
        ml={toggled ? fr(16) : 0}
      />
      <Button onClick={() => setToggled(!toggled)}>Toggle Properties</Button>
    </Stack>
  );
};

export const Properties = () => {
  const [toggled, setToggled] = useState(false);

  const [transition, setTransition] = useState("all");

  return (
    <Stack gap={fr(4)}>
      <Transition
        transition={transition}
        duration={1000}
        w={fr(30)}
        h={fr(30)}
        br={toggled ? "base" : "lg"}
        bg={toggled ? "base" : "primary"}
        op={toggled ? 0.5 : 1}
        bsh={toggled ? "sm" : "lg"}
      />
      <Radio.Group
        value={transition}
        onChange={(e: any) => setTransition(e.target.value)}
      >
        <Radio label="All" value="all" />
        <Radio label="Colors" value="colors" />
        <Radio label="Opacity" value="opacity" />
        <Radio label="Shadow" value="shadow" />
        <Radio label="Transform" value="transform" />
      </Radio.Group>
      <Button onClick={() => setToggled(!toggled)}>Toggle Properties</Button>
    </Stack>
  );
};
