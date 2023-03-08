import React from "react";
import { Star, Circle, Square } from "phosphor-react";
// Components
import ToggleBar from "../components/ToggleBar/ToggleBar";
import Form from "../components/Form/Form";
import Button from "../components/Button/Button";

export default {
  title: "ToggleBar",
  component: ToggleBar,
};

export const Default = () => (
  <Form
    submit={(values: any) => console.log(values)}
    initial={{ shape: "star" }}
  >
    <div className="flex gap-5 flex-wrap">
      <ToggleBar
        options={[
          { element: <Star size={20} />, value: "star" },
          { element: <Circle size={20} />, value: "circle" },
          { element: <Square size={20} />, value: "square" },
        ]}
        name="shape_1"
        label=""
        variant="filled"
      />
      <ToggleBar
        options={[
          { element: <Star size={20} />, value: "star" },
          { element: <Circle size={20} />, value: "circle" },
          { element: <Square size={20} />, value: "square" },
        ]}
        name="shape_2"
        label=""
        variant="smooth"
      />
      <ToggleBar
        options={[
          { element: <Star size={20} />, value: "star" },
          { element: <Circle size={20} />, value: "circle" },
          { element: <Square size={20} />, value: "square" },
        ]}
        name="shape_3"
        label=""
        variant="outlined"
      />
      <ToggleBar
        options={[
          { element: <Star size={20} />, value: "star" },
          { element: <Circle size={20} />, value: "circle" },
          { element: <Square size={20} />, value: "square" },
        ]}
        name="shape_4"
        label=""
        variant="raised"
      />
      <ToggleBar
        options={[
          { element: "First", value: "star" },
          { element: "Second", value: "circle" },
          { element: "Third", value: "square" },
        ]}
        name="shape_5"
        label=""
        variant="filled"
      />
    </div>
    <Button variant="primary" submit>
      Submit
    </Button>
  </Form>
);

export const Labeled = () => (
  <Form
    submit={(values: any) => console.log(values)}
    initial={{ shape: "circle" }}
  >
    <ToggleBar
      options={[
        { element: <Star size={20} />, value: "star" },
        { element: <Circle size={20} />, value: "circle" },
        { element: <Square size={20} />, value: "square" },
      ]}
      name="shape"
      label="Choose a shape:"
      variant="raised"
    />
    <Button variant="primary" submit>
      Submit
    </Button>
  </Form>
);
