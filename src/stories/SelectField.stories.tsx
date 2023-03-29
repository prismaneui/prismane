import React from "react";
import { User } from "phosphor-react";
// Components
import SelectField from "../components/SelectField/SelectField";
import Form from "../components/Form/Form";
import Button from "../components/Button/Button";

export default {
  title: "SelectField",
  component: SelectField,
};

export const Default = () => (
  <Form submit={(values: any) => console.log(values)} className="w-96">
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
  <Form submit={(values: any) => console.log(values)} className="w-96">
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

export const Icon = () => (
  <Form submit={(values: any) => console.log(values)} className="w-96">
    <SelectField
      icon={<User />}
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

export const Default_Value = () => (
  <Form submit={(values: any) => console.log(values)} className="w-96">
    <SelectField
      icon={<User />}
      options={[
        { element: "Gosho", value: "gosho" },
        { element: "Ivan", value: "ivan" },
        { element: "Petkan", value: "petkan" },
      ]}
      name="name_select"
      placeholder="Choose a name"
      label="Choose a name:"
      defaultValue="gosho"
    />
    <Button variant="primary" submit>
      Submit
    </Button>
  </Form>
);

export const No_Register = () => (
  <Form submit={(values: any) => console.log(values)} className="w-96">
    <SelectField
      icon={<User />}
      options={[
        { element: "Gosho", value: "gosho" },
        { element: "Ivan", value: "ivan" },
        { element: "Petkan", value: "petkan" },
      ]}
      name="name_select"
      placeholder="Choose a name"
      label="Choose a name:"
      handleChange={(v: any) => console.log(v)}
    />
    <Button variant="primary" submit>
      Submit
    </Button>
  </Form>
);

export const Search = () => (
  <Form submit={(values: any) => console.log(values)} className="w-96">
    <SelectField
      icon={<User />}
      options={[
        { element: "Gosho", value: "gosho" },
        { element: "Ivan", value: "ivan" },
        { element: "Petkan", value: "petkan" },
      ]}
      name="name_select"
      placeholder="Choose a name"
      label="Choose a name:"
      search
    />
    <Button variant="primary" submit>
      Submit
    </Button>
  </Form>
);
