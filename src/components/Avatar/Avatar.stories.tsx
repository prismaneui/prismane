import React from "react";
import { User } from "@phosphor-icons/react";
// Components
import Avatar from "./Avatar";
import Initials from "../Initials/Initials";

export default {
  tags: ["autodocs"],
  title: "Components/Data Display/Avatar",
  component: Avatar,
};

export const Default = () => <Avatar />;

export const Custom_Icon = () => (
  <Avatar>
    <User weight="bold" size={36} />
  </Avatar>
);

export const Image = () => (
  <Avatar src="https://i.pinimg.com/originals/a7/3b/3d/a73b3d77e2fdca58f57e568ddcfab1a5.jpg" />
);

export const Colors = () => (
  <>
    <Avatar color="red" />
    <Avatar color="orange" />
    <Avatar color="lime" />
    <Avatar color="green" />
    <Avatar color="cyan" />
    <Avatar color="amethyst" />
    <Avatar color="magenta" />
    <Avatar color="ruby" />
    <Avatar color="base" />
  </>
);

export const Sizes = () => (
  <>
    <Avatar size="xs" />
    <Avatar size="sm" />
    <Avatar size="base" />
    <Avatar size="md" />
    <Avatar size="lg" />
  </>
);

export const Name = () => (
  <Avatar>
    <Initials name="John Doe" />
  </Avatar>
);
