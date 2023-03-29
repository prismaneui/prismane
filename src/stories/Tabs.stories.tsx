import React from "react";
import { Star, Circle, Square } from "phosphor-react";
// Components
import Tabs from "../components/Tabs/Tabs";

export default {
  title: "Tabs",
  component: Tabs,
};

export const Default = () => (
  <div className="flex flex-col gap-5 w-96">
    <Tabs
      options={[
        { element: <Star size={20} />, value: "star" },
        { element: <Circle size={20} />, value: "circle" },
        { element: <Square size={20} />, value: "square" },
      ]}
      defaultValue="star"
      variant="underline"
    />
    <Tabs
      options={[
        { element: <Star size={20} />, value: "star" },
        { element: <Circle size={20} />, value: "circle" },
        { element: <Square size={20} />, value: "square" },
      ]}
      defaultValue="star"
      variant="filled"
    />
    <Tabs
      options={[
        { element: <Star size={20} />, value: "star" },
        { element: <Circle size={20} />, value: "circle" },
        { element: <Square size={20} />, value: "square" },
      ]}
      variant="smooth"
    />
    <Tabs
      options={[
        { element: <Star size={20} />, value: "star" },
        { element: <Circle size={20} />, value: "circle" },
        { element: <Square size={20} />, value: "square" },
      ]}
      variant="outlined"
    />
    <Tabs
      options={[
        { element: <Star size={20} />, value: "star" },
        { element: <Circle size={20} />, value: "circle" },
        { element: <Square size={20} />, value: "square" },
      ]}
      variant="raised"
    />
    <Tabs
      options={[
        { element: "First", value: "star" },
        { element: "Second", value: "circle" },
        { element: "Third", value: "square" },
      ]}
      variant="filled"
    />
    <Tabs
      options={[
        { element: "First", value: "star" },
        { element: "Second", value: "circle" },
        { element: "Third", value: "square" },
      ]}
      defaultValue="star"
      variant="underline"
    />
  </div>
);
