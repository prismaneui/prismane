import React from "react";
import {
  DownloadSimple,
  Phone,
  ShareNetwork,
  GearSix,
} from "@phosphor-icons/react";
// Components
import Button from "./Button";
import Flex from "../Flex/Flex";
// Utils
import { fr } from "../../utils";

export default {
  tags: ["autodocs"],
  title: "Components/Inputs/Button",
  component: Button,
};

export const Default = () => <Button>Button</Button>;

export const Variants = () => (
  <>
    <Button variant="primary">Primary Variant</Button>
    <Button variant="secondary">Secondary Variant</Button>
    <Button variant="tertiary">Tertiary Variants</Button>
    <Button variant="text">Text Variant</Button>
  </>
);

export const Sizes = () => (
  <>
    <Button size="xs">xs Size</Button>
    <Button size="sm">sm Size</Button>
    <Button size="base">base Size</Button>
    <Button size="md">md Size</Button>
    <Button size="lg">lg Size</Button>
  </>
);

export const Colors = () => (
  <>
    <Button color="red">Red</Button>
    <Button color="orange">Orange</Button>
    <Button color="lime">Lime</Button>
    <Button color="green">Green</Button>
    <Button color="cyan">Cyan</Button>
    <Button color="amethyst">Amethyst</Button>
    <Button color="magenta">Magenta</Button>
    <Button color="ruby">Ruby</Button>
    <Button color="base">Base</Button>
  </>
);

export const Icon = () => <Button icon={<DownloadSimple />}>Download</Button>;

export const Icon_Position = () => (
  <>
    <Button iconPosition="left" icon={<Phone />}>
      Call Us
    </Button>
    <Button
      iconPosition="right"
      icon={<ShareNetwork />}
      color="teal"
      variant="tertiary"
    >
      Share
    </Button>
  </>
);

export const Shadow = () => <Button shadow>Shadow Button</Button>;

export const Full_Width = () => (
  <Flex w={fr(72)}>
    <Button full>Full Width Button</Button>
  </Flex>
);

export const Fill_On_Hover = () => (
  <>
    <Button variant="secondary" fillOnHover>
      Add to cart
    </Button>
    <Button variant="tertiary" color="red" fillOnHover>
      Delete Post
    </Button>
  </>
);

export const Loading = () => (
  <>
    <Button variant="primary" loading>
      Loading
    </Button>
    <Button variant="secondary" loading>
      Loading
    </Button>
    <Button variant="tertiary" loading>
      Loading
    </Button>
    <Button variant="text" loading>
      Loading
    </Button>
  </>
);

export const Customized = () => (
  <Button icon={<GearSix />} variant="secondary" color="gray" br="full">
    Settings
  </Button>
);
