import React from "react";
// Components
import Chip from "../components/Chip/Chip";

export default {
  title: "Chip",
  component: Chip,
};

export const Primary = () => (
  <Chip
    variant="primary"
    label="Chip"
    onClick={() => {
      alert("Clicked!");
    }}
  />
);

export const Secondary = () => (
  <Chip
    variant="secondary"
    label="Secondary"
    onClick={() => {
      alert("Clicked!");
    }}
  />
);

export const Text = () => (
  <Chip
    variant="text"
    label="Text"
    onClick={() => {
      alert("Clicked!");
    }}
  />
);
