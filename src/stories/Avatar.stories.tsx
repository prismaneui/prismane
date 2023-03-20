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
  <div className="w-16 aspect-square">
    <Avatar src="https://annemariesegal.files.wordpress.com/2017/06/img_0422-linkedin-size-smiling-man-in-suit.png" />
  </div>
);

export const Letter = () => (
  <div className="w-16 aspect-square">
    <Avatar>
      <Initials name="John Doe" />
    </Avatar>
  </div>
);

export const Icon = () => (
  <div className="w-16 aspect-square">
    <Avatar>
      <Skull size={24} />
    </Avatar>
  </div>
);
