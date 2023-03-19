import React from "react";
// Components
import Dropdown from "../components/Dropdown/Dropdown";

export default {
  title: "Dropdown",
  component: Dropdown,
};

export const Default = () => (
  <Dropdown items={["Ivan", "Petkan", "Petran"]} className="w-96" />
);
