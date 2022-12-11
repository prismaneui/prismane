import React from "react";
// Components
import Loader from "../components/Loader/Loader";

export default {
  title: "Loader",
  component: Loader,
};

export const Default = () => (
  <div className="w-16 aspect-square bg-slate-700">
    <Loader />
  </div>
);
