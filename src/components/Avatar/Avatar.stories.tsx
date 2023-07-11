import { Skull } from "@phosphor-icons/react";
// Components
import Avatar from "./Avatar";
import Flex from "../Flex/Flex";
import Initials from "../Initials/Initials";
// Utils
import { fr } from "../../utils";

export default {
  title: "Avatar",
  component: Avatar,
};

export const Default = () => (
  <Avatar src="https://annemariesegal.files.wordpress.com/2017/06/img_0422-linkedin-size-smiling-man-in-suit.png" />
);

export const Sizes = () => (
  <Flex align="center" gap={fr(5)}>
    <Avatar size="xs">
      <Initials name="John Doe" />
    </Avatar>
    <Avatar size="sm">
      <Initials name="John Doe" />
    </Avatar>
    <Avatar size="base">
      <Initials name="John Doe" />
    </Avatar>
    <Avatar size="md">
      <Initials name="John Doe" />
    </Avatar>
    <Avatar size="lg">
      <Initials name="John Doe" />
    </Avatar>
  </Flex>
);

export const Letter = () => (
  <Avatar>
    <Initials name="John Doe" />
  </Avatar>
);

export const Icon = () => (
  <Avatar>
    <Skull size={24} />
  </Avatar>
);

export const Placeholder = () => <Avatar />;
