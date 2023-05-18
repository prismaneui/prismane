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
  <Flex align="center" gap={fr(5)}>
    <Avatar
      src="https://annemariesegal.files.wordpress.com/2017/06/img_0422-linkedin-size-smiling-man-in-suit.png"
      size="xs"
    />
    <Avatar
      src="https://annemariesegal.files.wordpress.com/2017/06/img_0422-linkedin-size-smiling-man-in-suit.png"
      size="sm"
    />
    <Avatar
      src="https://annemariesegal.files.wordpress.com/2017/06/img_0422-linkedin-size-smiling-man-in-suit.png"
      size="base"
    />
    <Avatar
      src="https://annemariesegal.files.wordpress.com/2017/06/img_0422-linkedin-size-smiling-man-in-suit.png"
      size="md"
    />
    <Avatar
      src="https://annemariesegal.files.wordpress.com/2017/06/img_0422-linkedin-size-smiling-man-in-suit.png"
      size="lg"
    />
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
