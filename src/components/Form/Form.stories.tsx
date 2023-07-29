import React from "react";
// Components
import Form from "./Form";
import TextField from "../TextField/TextField";
import NumberField from "../NumberField/NumberField";
import SelectField from "../SelectField/SelectField";
import Button from "../Button/Button";
import Link from "../Link/Link";
import Card from "../Card/Card";
import Switch from "../Switch/Switch";
import Checkbox from "../Checkbox/Checkbox";
import Flex from "../Flex/Flex";
// Utils
import { required, username, min } from "../../validators";
// Hooks
import useForm from "../../hooks/useForm";

export default {
  title: "Form",
  component: Form,
};

export const Default = () => {
  const { handleSubmit, handleReset, setValue, register } = useForm({
    fields: {
      username: {
        value: ["us", "cn", "ca"],
      },
      number: {
        value: 0,
      },
    },
  });

  return (
    <Card className="!p-5">
      <Form
        onSubmit={(e: any) => {
          handleSubmit(e, (v: any) => console.log(v));
        }}
        onReset={() => handleReset()}
        className=""
      >
        <TextField
          placeholder="Enter username: "
          label="Username:"
          {...register("username")}
        />
        <NumberField
          placeholder="Choose a number: "
          label="Number:"
          {...register("number")}
        />
        <Flex align="center" gap={2}>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="primary" type="reset">
            Reset
          </Button>
          <Button
            variant="primary"
            onClick={() => setValue("username", "gosho")}
          >
            Custom
          </Button>
        </Flex>
      </Form>
    </Card>
  );
};

export const Complex = () => {
  const { handleSubmit, handleReset, register } = useForm({
    fields: {
      username: {
        value: "",
        validators: {
          required: (v: string) => required(v),
          min: (v: string) => min(v, 4),
          username: (v: string) => username(v),
        },
      },
      field: {
        value: "",
      },
    },
  });

  return (
    <Card className="!p-5">
      <Form
        onSubmit={(e: any) => {
          handleSubmit(e, (v: any) => console.log(v));
        }}
        onReset={() => handleReset()}
        className="max-w-[300px]"
      >
        <TextField
          placeholder="Enter username: "
          label="Username:"
          {...register("username")}
        />
        <SelectField
          {...register("field")}
          placeholder="Default Field"
          label="Default Field:"
          options={[
            { value: "ivan", element: "Ivan" },
            { value: "gosho", element: "Gosho" },
            { value: "petkan", element: "Petkan" },
          ]}
        />
        <Flex align="center" gap={2}>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="primary" type="reset">
            Reset
          </Button>
        </Flex>
      </Form>
    </Card>
  );
};
