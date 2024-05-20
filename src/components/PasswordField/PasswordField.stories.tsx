import React, { useState } from "react";
// Components
import PasswordField from "../PasswordField/PasswordField";
// Hooks
import useForm from "../../hooks/useForm";

export default {
  tags: ["autodocs"],
  title: "Components/Inputs/PasswordField",
  component: PasswordField,
};

export const Default = () => {
  const [password, setPassword] = useState("supersecret");

  return (
    <PasswordField
      label="Password:"
      placeholder="Enter password"
      value={password}
      onChange={(e: any) => setPassword(e.target.value)}
    />
  );
};

export const Read_Only = () => {
  const [value, setValue] = useState("readonly_password");

  return (
    <PasswordField
      label="Password:"
      placeholder="Choose a password"
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
      readOnly
    />
  );
};

export const Disabled = () => {
  const [value, setValue] = useState("readonly_password");

  return (
    <PasswordField
      label="Password:"
      placeholder="Choose a password"
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
      disabled
    />
  );
};

export const useForm_Example = () => {
  const { register } = useForm({
    fields: {
      hook_password: {
        value: "",
      },
    },
  });

  return (
    <PasswordField
      label="Controlled PasswordField"
      placeholder="Controlled Field"
      {...register("hook_password")}
    />
  );
};
