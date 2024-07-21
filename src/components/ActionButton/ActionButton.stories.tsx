import React, { FC } from "react";
import {
  MagnifyingGlass,
  ThumbsUp,
  DownloadSimple,
  GearSix,
  Play,
} from "@phosphor-icons/react";
// Components
import ActionButton from "./ActionButton";

export default {
  tags: ["autodocs"],
  title: "Components/Inputs/ActionButton",
  component: ActionButton,
};

export const Default: FC = () => {
  return (
    <ActionButton icon={<MagnifyingGlass />} aria-label="Search Components" />
  );
};

export const Variants: FC = () => (
  <>
    <ActionButton
      variant="primary"
      icon={<ThumbsUp />}
      aria-label="Like Prismane's Post"
    />
    <ActionButton
      variant="secondary"
      icon={<ThumbsUp />}
      aria-label="Like Prismane's Post"
    />
    <ActionButton
      variant="tertiary"
      icon={<ThumbsUp />}
      aria-label="Like Prismane's Post"
    />
    <ActionButton
      variant="text"
      icon={<ThumbsUp />}
      aria-label="Like Prismane's Post"
    />
  </>
);

export const Sizes: FC = () => (
  <>
    <ActionButton
      size="xs"
      icon={<DownloadSimple />}
      aria-label="Download Prismane's Source Code"
    />
    <ActionButton
      size="sm"
      icon={<DownloadSimple />}
      aria-label="Download Prismane's Source Code"
    />
    <ActionButton
      size="base"
      icon={<DownloadSimple />}
      aria-label="Download Prismane's Source Code"
    />
    <ActionButton
      size="md"
      icon={<DownloadSimple />}
      aria-label="Download Prismane's Source Code"
    />
    <ActionButton
      size="lg"
      icon={<DownloadSimple />}
      aria-label="Download Prismane's Source Code"
    />
  </>
);

export const Custom_Color: FC = () => (
  <ActionButton color="base" icon={<GearSix />} aria-label="Open Settings" />
);

export const Custom_Button: FC = () => (
  <ActionButton
    icon={<Play />}
    aria-label="Play Soundgarden - Black Hole Sun"
    br="full"
    variant="secondary"
    color="lime"
  />
);
