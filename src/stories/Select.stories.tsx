import React from "react";
// Components
import Select from "../components/Select/Select";
import Form from "../components/Form/Form";
import Button from "../components/Button/Button";

export default {
  title: "Select",
  component: Select,
};

export const Default = () => (
  <Form submit={(values: any) => console.log(values)}>
    <Select
      options={["Ivan", "Petkan", "Gosho"]}
      name="name_select"
      placeholder=""
      label=""
    />
    <Button variant="primary" submit>
      Submit
    </Button>
  </Form>
);
