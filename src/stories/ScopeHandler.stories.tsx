import React, { useState } from "react";
// Components
import ScopeHandler from "../components/ScopeHandler/ScopeHandler";

export default {
  title: "ScopeHandler",
  component: ScopeHandler,
};

export const Default = () => {
  const [outsideClicks, setOutsideClicks] = useState(0);

  return (
    <>
      <ScopeHandler
        onEvent={() => {
          setOutsideClicks(outsideClicks + 1);
        }}
      >
        <div className="w-16 aspect-square bg-red-500"></div>
      </ScopeHandler>
      <span>Outside Clicks: {outsideClicks}</span>
    </>
  );
};
