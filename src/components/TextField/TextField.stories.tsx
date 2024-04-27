import { useState } from "react";
// Components
import TextField from "./TextField";
// Hooks
import useForm from "../../hooks/useForm";

export default {
  tags: ["autodocs"],
  title: "Components/Inputs/TextField",
  component: TextField,
};

export const Default = () => {
  const [value, setValue] = useState("");

  return (
    <TextField
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
      label="Text:"
      placeholder="Enter Text"
    />
  );
};

export const Prefix = () => {
  const [value, setValue] = useState("");

  return (
    <TextField
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
      label="Website:"
      placeholder="Enter A Website Address"
      prefix="https://"
    />
  );
};

export const Suffix = () => {
  const [value, setValue] = useState("");

  return (
    <TextField
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
      label="Website:"
      placeholder="Enter A Website Address"
      suffix=".com"
    />
  );
};

export const Read_Only = () => {
  const [value, setValue] = useState("I am read only!");

  return (
    <TextField
      label="Text:"
      placeholder="Enter Text"
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
      readOnly
    />
  );
};

export const Disabled = () => {
  const [value, setValue] = useState("I am disabled!");

  return (
    <TextField
      label="Text:"
      placeholder="Enter Text"
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
      disabled
    />
  );
};

export const useForm_Example = () => {
  const { register } = useForm({
    fields: {
      hook_text: {
        value: "",
      },
    },
  });

  return (
    <TextField
      label="Controlled TextField"
      placeholder="Controlled Field"
      {...register("hook_text")}
    />
  );
};
