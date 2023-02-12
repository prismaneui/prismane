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
    <ToggleBar
      options={[
        { element: <Star size={20} />, value: "star" },
        { element: <Circle size={20} />, value: "circle" },
        { element: <Square size={20} />, value: "square" },
      ]}
      name="shape"
      label=""
    />
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
    />
    <Button variant="primary" submit>
      Submit
    </Button>
  </Form>
);
