import React from "react";
// Components
import Tooltip from "../components/Tooltip/Tooltip";
import Button from "../components/Button/Button";

export default {
  title: "Tooltip",
  component: Tooltip,
};

export const Default = () => (
  <div className="flex w-full h-full mt-10">
    <div className="flex gap-2">
      <Tooltip title="test" position="top-start">
        <Button variant="primary">Top Start</Button>
      </Tooltip>
      <Tooltip title="test" position="top">
        <Button variant="primary">Top</Button>
      </Tooltip>
      <Tooltip title="test" position="top-end">
        <Button variant="primary">Top End</Button>
      </Tooltip>
    </div>
  </div>
);
