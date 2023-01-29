import React from "react";
// Components
import Tooltip from "../components/Tooltip/Tooltip";
import Button from "../components/Button/Button";

export default {
  title: "Tooltip",
  component: Tooltip,
};

export const Default = () => (
  <div className="flex w-full h-52 m-20 gap-5">
    <div className="flex flex-col w-fit justify-center items-center gap-2">
      <Tooltip title="test" position="left-start">
        <Button variant="text">Left Start</Button>
      </Tooltip>
      <Tooltip title="test" position="left">
        <Button variant="text">Left</Button>
      </Tooltip>
      <Tooltip title="test" position="left-end">
        <Button variant="text">Left End</Button>
      </Tooltip>
    </div>
    <div className="flex flex-col h-full w-fit justify-between items-center">
      <div className="flex justify-center items-center gap-2">
        <Tooltip title="test" position="top-start">
          <Button variant="text">Top Start</Button>
        </Tooltip>
        <Tooltip title="test" position="top">
          <Button variant="text">Top</Button>
        </Tooltip>
        <Tooltip title="test" position="top-end">
          <Button variant="text">Top End</Button>
        </Tooltip>
      </div>
      <div className="flex justify-center items-center gap-2">
        <Tooltip title="test" position="bottom-start">
          <Button variant="text">Bottom Start</Button>
        </Tooltip>
        <Tooltip title="test" position="bottom">
          <Button variant="text">Bottom</Button>
        </Tooltip>
        <Tooltip title="test" position="bottom-end">
          <Button variant="text">Bottom End</Button>
        </Tooltip>
      </div>
    </div>
    <div className="flex flex-col w-fit justify-center items-center gap-2">
      <Tooltip title="test" position="right-start">
        <Button variant="text">Right Start</Button>
      </Tooltip>
      <Tooltip title="test" position="right">
        <Button variant="text">Right</Button>
      </Tooltip>
      <Tooltip title="test" position="right-end">
        <Button variant="text">Right End</Button>
      </Tooltip>
    </div>
  </div>
);
