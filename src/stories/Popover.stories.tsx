import React from "react";
// Components
import Popover from "../components/Popover/Popover";
import Button from "../components/Button/Button";

export default {
  title: "Popover",
  component: Popover,
};

export const Default = () => (
  <div className="flex w-full h-[100vh] justify-center items-center mt-10">
    <Popover
      handler={<Button variant="primary">Popover</Button>}
      position="bottom"
    >
      This is the content of the popover!
    </Popover>
  </div>
);
