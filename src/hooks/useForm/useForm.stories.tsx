import React from "react";
// Components
import Form from "../../components/Form";
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Flex from "../../components/Flex/Flex";
// Utils
import { fr } from "../../utils";
import { required, username, min } from "../../validators";
// Hooks
import useForm from "./useForm";

export default {
  tags: ["autodocs"],
  title: "Hooks/State Management/useForm",
  component: useForm,
};

export const Default = () => {
  const backend = async () => {
    return null;
  };

  const { handleSubmit, handleReset, register } = useForm({
    fields: {
      username: {
        value: "",
        validators: {
          required: (v: string) => required(v),
          min: (v: string) => min(v, 4),
          username: (v: string) => username(v),
          backend: async () => await backend(),
        },
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

export const Simulate_Errors = () => {
  const backend = async () => {
    return null;
  };

  const { setValue, setError, validate, handleChange, handleBlur } = useForm({
    fields: {
      username: {
        value: "",
        validators: {
          required: (v: string) => required(v),
          min: (v: string) => min(v, 4),
          username: (v: string) => username(v),
          backend: async () => await backend(),
        },
      },
    },
  });

  return (
    <Flex gap={fr(2)} align="center">
      <Button onClick={() => setValue("unexistant", "some_value")}>
        Set Value
      </Button>
      <Button onClick={() => setError("unexistant", "some_error")}>
        Set Error
      </Button>
      <Button onClick={() => validate("unexistant", "some_error")}>
        Validate
      </Button>
      <Button onClick={() => handleChange("unexistant", "some_error")}>
        Handle Change
      </Button>
      <Button onClick={() => handleBlur("unexistant")}>Handle Blur</Button>
    </Flex>
  );
};
