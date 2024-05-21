import React, { useState } from "react";
// Components
import Form from "./Form";
import TextField from "../TextField/TextField";
import PasswordField from "../PasswordField/PasswordField";
import Button from "../Button/Button";
import Flex from "../Flex/Flex";
// Hooks
import useForm from "../../hooks/useForm";
// Utils
import { fr } from "@utils";
import { required, min } from "../../validators";

export default {
  tags: ["autodocs"],
  title: "Components/Inputs/Form",
  component: Form,
};

export const Default = () => {
  const [values, setValues] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();

        const form: any = e.target;

        const data = new FormData(form);

        console.log(data);

        setValues(JSON.stringify(Object.fromEntries(data)));
      }}
      onReset={() => setValues("")}
    >
      <TextField
        name="username"
        placeholder="Enter username: "
        label="Username:"
      />
      <Flex gap={fr(2)}>
        <Button type="submit">Submit</Button>
        <Button type="reset">Reset</Button>
      </Flex>
      Values: {values}
    </Form>
  );
};

export const useForm_Hook = () => {
  const { handleSubmit, handleReset, register } = useForm({
    fields: {
      username: {
        value: "",
      },
      password: {
        value: "",
      },
    },
  });

  const [values, setValues] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        handleSubmit(e, (v) => setValues(JSON.stringify(v)));
      }}
      onReset={() => {
        handleReset();
      }}
    >
      <TextField
        placeholder="Enter Username"
        label="Username:"
        {...register("username")}
      />
      <PasswordField
        placeholder="Enter Password"
        label="Password:"
        {...register("password")}
      />
      <Flex gap={fr(2)}>
        <Button type="submit">Submit</Button>
        <Button type="reset">Reset</Button>
      </Flex>
      Values: {values}
    </Form>
  );
};

export const Validators = () => {
  const { handleSubmit, handleReset, register } = useForm({
    fields: {
      fullname: {
        value: "",
        validators: {
          required: (v) => required(v),
          min: (v) => min(v, 4),
        },
      },
    },
  });

  const [values, setValues] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        handleSubmit(e, (v: any) => setValues(v));
      }}
      onReset={() => {
        handleReset();
      }}
    >
      <TextField
        placeholder="John Doe"
        label="Full name:"
        {...register("fullname")}
      />
      <Flex gap={fr(2)}>
        <Button type="submit">Submit</Button>
        <Button type="reset">Reset</Button>
      </Flex>
      Values: {JSON.stringify(values)}
    </Form>
  );
};
