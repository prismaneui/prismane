import React from "react";
// Components
import Form from "../components/Form/Form";
import Switch from "../components/Switch/Switch";

export default {
  title: "Switch",
  component: Switch,
};

export const Default = () => (
  <Form submit={(values) => console.log(values)}>
    <div className="flex flex-col gap-5">
      <span>Turn on notifications?</span>
      <Switch name="notifications" />
    </div>
  </Form>
);
