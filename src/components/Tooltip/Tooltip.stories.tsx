import React, { useState } from "react";
// Components
import Tooltip from "./Tooltip";
import Button from "../Button/Button";
import Stack from "../Stack/Stack";
import Radio from "../Radio/Radio";
// Utils
import { fr } from "../../utils";

export default {
  tags: ["autodocs"],
  title: "Components/Overlay/Tooltip",
  component: Tooltip,
};

export const Default = () => (
  <Tooltip label="This is the tooltip information" aria-label="A tooltip">
    Hover me
  </Tooltip>
);

export const Custom_Component = () => (
  <Tooltip label="Button tooltip information" aria-label="A tooltip">
    <Button>Button Target</Button>
  </Tooltip>
);

export const Positions = () => {
  const [position, setPosition] = useState("right");

  const [point, setPoint] = useState("middle");

  return (
    <Stack gap={fr(4)} align="center">
      <Radio.Group
        value={position}
        onChange={(e: any) => setPosition(e.target.value)}
      >
        <Radio label="Top" value="top" />
        <Radio label="Bottom" value="bottom" />
        <Radio label="Left" value="left" />
        <Radio label="Right" value="right" />
      </Radio.Group>
      <Radio.Group
        value={point}
        onChange={(e: any) => setPoint(e.target.value)}
      >
        <Radio label="Start" value="start" />
        <Radio label="None (e.g. right, left)" value="none" />
        <Radio label="End" value="end" />
      </Radio.Group>
      <Tooltip
        label="Fire!"
        position={(point !== "none" ? `${position}-${point}` : position) as any}
      >
        <Button>Hover me</Button>
      </Tooltip>
    </Stack>
  );
};

export const Colors = () => (
  <Tooltip label="Tooltip With Custom Color" color="teal">
    <Button>Teal Color</Button>
  </Tooltip>
);

export const Text_Color = () => (
  <Tooltip label="Tooltip With Custom Text Color" cl="lime">
    <Button>Lime Text Color</Button>
  </Tooltip>
);

export const Custom_Animation = () => (
  <Tooltip animation="scale" label="Tooltip With Scale Animation">
    <Button>Scale Tooltip</Button>
  </Tooltip>
);

export const Custom_Animation_Duration = () => (
  <Tooltip duration={500} label="Tooltip With Duration of 500ms">
    <Button>Hover To Show</Button>
  </Tooltip>
);
