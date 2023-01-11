import React from "react";
// Components
import Form from "../components/Form/Form";
import Radio from "../components/Radio/Radio";
import Button from "../components/Button/Button";

export default {
  title: "Radio",
  component: Radio,
};

export const Default = () => (
  <Form
    submit={(values) => console.log(values)}
    initial={{ notifications: "Yes" }}
  >
    <div className="flex flex-col gap-5 w-96">
      <span>Turn on notifications?</span>
      <div className="flex items-center gap-2">
        <Radio name="notifications" value="Yes" />
        <span>Yes</span>
      </div>
      <div className="flex items-center gap-2">
        <Radio name="notifications" value="No" />
        <span>No</span>
      </div>
      <Button variant="primary" submit>
        Submit
      </Button>
    </div>
  </Form>
);
