import React, { useState } from "react";
import { EnvelopeSimple, Bell } from "@phosphor-icons/react";
// Components
import Badge from "./Badge";
import Stack from "../Stack";
import Radio from "../Radio";
import ActionButton from "../ActionButton";
// Utils
import { fr } from "@utils";

export default {
  tags: ["autodocs"],
  title: "Components/Data Display/Badge",
  component: Badge,
};

export const Default = () => (
  <Badge label="4">
    <ActionButton icon={<EnvelopeSimple />} variant="secondary" color="base" />
  </Badge>
);

export const Badge_Positions = () => {
  const [position, setPosition] = useState("top");

  const [point, setPoint] = useState("end");

  return (
    <Stack gap={fr(8)} align="center">
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
      <Badge
        label="4"
        position={point !== "none" ? `${position}-${point}` : position}
      >
        <ActionButton icon={<Bell />} variant="secondary" color="base" />
      </Badge>
    </Stack>
  );
};

export const Sizes = () => (
  <>
    <Badge label="4">
      <ActionButton
        icon={<Bell />}
        variant="secondary"
        color="base"
        size="xs"
      />
    </Badge>
    <Badge label="4" size="sm">
      <ActionButton
        icon={<Bell />}
        variant="secondary"
        color="base"
        size="sm"
      />
    </Badge>
    <Badge label="4" size="base">
      <ActionButton icon={<Bell />} variant="secondary" color="base" />
    </Badge>
    <Badge label="4" size="md">
      <ActionButton
        icon={<Bell />}
        variant="secondary"
        color="base"
        size="md"
      />
    </Badge>
    <Badge label="4" size="lg">
      <ActionButton
        icon={<Bell />}
        variant="secondary"
        color="base"
        size="lg"
      />
    </Badge>
  </>
);

export const Colors = () => (
  <>
    <Badge label="4" color="red">
      <ActionButton icon={<Bell />} variant="secondary" color="base" />
    </Badge>
    <Badge label="4" color="orange">
      <ActionButton icon={<Bell />} variant="secondary" color="base" />
    </Badge>
    <Badge label="4" color="lime">
      <ActionButton icon={<Bell />} variant="secondary" color="base" />
    </Badge>
    <Badge label="4" color="cyan">
      <ActionButton icon={<Bell />} variant="secondary" color="base" />
    </Badge>
    <Badge label="4" color="amethyst">
      <ActionButton icon={<Bell />} variant="secondary" color="base" />
    </Badge>
  </>
);

export const Text_Color = () => (
  <Badge label="4" color="base" cl="diamond">
    <ActionButton icon={<Bell />} variant="secondary" color="base" />
  </Badge>
);
