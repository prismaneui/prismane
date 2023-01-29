import React, { useState } from "react";
// Components
import Progress from "../components/Progress/Progress";

export default {
  title: "Progress",
  component: Progress,
};

export const Circle = () => {
  const [value, setValue] = useState(0);

  setInterval(() => {
    if (value !== 100) {
      setValue(value + 1);
    } else {
      return;
    }
  }, 100);

  return (
    <div className="flex justify-center items-center aspect-square">
      <Progress variant="circle" value={value} label={`${value}%`} />
    </div>
  );
};

export const Line = () => {
  const [value, setValue] = useState(0);

  setInterval(() => {
    if (value !== 100) {
      setValue(value + 1);
    } else {
      return;
    }
  }, 100);

  return (
    <div className="flex justify-center items-center aspect-square">
      <Progress variant="line" value={value} label={`${value}%`} />
    </div>
  );
};
