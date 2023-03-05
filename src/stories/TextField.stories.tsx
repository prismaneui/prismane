import React from "react";
// Components
import Form from "../components/Form/Form";
import TextField from "../components/TextField/TextField";
import Button from "../components/Button/Button";

export default {
  title: "TextField",
  component: TextField,
};

export const Default = () => (
  <Form submit={(values) => console.log(values)} className="w-96">
    <TextField
      name="field_1"
      placeholder="Default Field"
      label="Default Field:"
    />
  </Form>
);

export const ReadOnly = () => (
  <Form submit={(values) => console.log(values)} className="w-96">
    <TextField
      name="field_1"
      placeholder="Read Only Field"
      label="Read Only Field:"
      value={"Read Only"}
      readOnly
    />
  </Form>
);

export const DefaultValue = () => (
  <Form submit={(values) => console.log(values)} className="w-96">
    <TextField
      name="field_1"
      placeholder="Read Only Field"
      label="Read Only Field:"
      defaultValue="Default Value"
    />
    <Button variant="primary" submit>
      Submit
    </Button>
  </Form>
);
