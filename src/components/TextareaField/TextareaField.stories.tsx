import { useState } from "react";
// Components
import TextareaField from "./TextareaField";
// Hooks
import useForm from "../../hooks/useForm";
// Utils
import { fr } from "../../utils";

export default {
  tags: ["autodocs"],
  title: "Components/Inputs/TextareaField",
  component: TextareaField,
};

export const Default = () => {
  const [value, setValue] = useState("");

  return (
    <TextareaField
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
      label="Text:"
      placeholder="Enter Text"
    />
  );
};

export const Size = () => {
  const [value, setValue] = useState("");

  return (
    <TextareaField
      w={fr(64)}
      h={fr(96)}
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
      label="Resized Textarea:"
      placeholder="Enter Text"
    />
  );
};

export const Read_Only = () => {
  const [value, setValue] = useState("I am read only!");

  return (
    <TextareaField
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
    <TextareaField
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
      hook_textarea: {
        value: "",
      },
    },
  });

  return (
    <TextareaField
      label="Controlled TextareaField"
      placeholder="Controlled Field"
      {...register("hook_textarea")}
    />
  );
};
