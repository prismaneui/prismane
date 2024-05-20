import React from "react";
// Components
import Initials from "./Initials";
import Avatar from "../Avatar/Avatar";

export default {
  tags: ["autodocs"],
  title: "Components/Data Display/Initials",
  component: Initials,
};

export const Default = () => <Initials name="Martin Petrov" />;

export const Avatar_Example = () => (
  <Avatar>
    <Initials name="Martin Petrov" />
  </Avatar>
);
