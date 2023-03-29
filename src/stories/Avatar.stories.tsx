import React from "react";
import { Skull } from "phosphor-react";
// Components
import Avatar from "../components/Avatar/Avatar";
import Initials from "../components/Initials/Initials";

export default {
  title: "Avatar",
  component: Avatar,
};

export const Default = () => (
  <div className="flex items-center gap-5">
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
  </div>
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
