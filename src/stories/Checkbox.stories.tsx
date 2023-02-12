import React from "react";
// Components
import Form from "../components/Form/Form";
import Checkbox from "../components/Checkbox/Checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
};

export const Default = () => (
  <Form submit={(values) => console.log(values)}>
    <div className="flex flex-col gap-5">
      <span>Turn on notifications?</span>
      <Checkbox name="notifications" />
    </div>
  </Form>
);