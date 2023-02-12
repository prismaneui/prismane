import React from "react";
// Components
import SelectField from "../components/SelectField/SelectField";
import Form from "../components/Form/Form";
import Button from "../components/Button/Button";

export default {
  title: "SelectField",
  component: SelectField,
};

export const Default = () => (
  <Form submit={(values: any) => console.log(values)}>
    <SelectField
      options={[
        { element: "Gosho", value: "gosho" },
        { element: "Ivan", value: "ivan" },
        { element: "Petkan", value: "petkan" },
      ]}
      name="name_select"
      placeholder="Choose a name"
      label=""
    />
    <Button variant="primary" submit>
      Submit
    </Button>
  </Form>
);

export const Labeled = () => (
  <Form submit={(values: any) => console.log(values)}>
    <SelectField
      options={[
        { element: "Gosho", value: "gosho" },
        { element: "Ivan", value: "ivan" },
        { element: "Petkan", value: "petkan" },
      ]}
      name="name_select"
      placeholder="Choose a name"
      label="Choose a name:"
    />
    <Button variant="primary" submit>
      Submit
    </Button>
  </Form>
);
