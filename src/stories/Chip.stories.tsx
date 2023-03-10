import React from "react";
import { WarningCircle } from "phosphor-react";
// Components
import Chip from "../components/Chip/Chip";

export default {
  title: "Chip",
  component: Chip,
};

export const Default = () => (
  <Chip
    label={
      <div className="flex gap-2 items-center">
        <WarningCircle size={16} />
        Error
      </div>
    }
    onClick={() => {
      alert("Clicked!");
    }}
    color="pink"
  />
);
