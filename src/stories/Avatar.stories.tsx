import React from "react";
// Components
import Avatar from "../components/Avatar/Avatar";

export default {
  title: "Avatar",
  component: Avatar,
};

export const Default = () => (
  <div className="w-16 aspect-square">
    <Avatar src="https://annemariesegal.files.wordpress.com/2017/06/img_0422-linkedin-size-smiling-man-in-suit.png" />
  </div>
);
