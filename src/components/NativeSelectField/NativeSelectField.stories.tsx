import React, { useState } from "react";
// Components
import NativeSelectField from "../NativeSelectField/NativeSelectField";
// Hooks
import useForm from "../../hooks/useForm";

export default {
  tags: ["autodocs"],
  title: "Components/Inputs/NativeSelectField",
  component: NativeSelectField,
};

export const Default = () => {
  return (
    <NativeSelectField
      name="framework"
      label="Choose a framework:"
      placeholder="Choose your favorite framework"
      options={[
        { value: "react", label: "React" },
        { value: "angular", label: "Angular" },
        { value: "vue", label: "Vue" },
      ]}
    />
  );
};

export const Controlled = () => {
  const [value, setValue] = useState("");

  return (
    <NativeSelectField
      name="framework"
      label="Choose a framework:"
      placeholder="Choose your favorite framework"
      options={[
        { value: "react", label: "React" },
        { value: "angular", label: "Angular" },
        { value: "vue", label: "Vue" },
      ]}
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
    />
  );
};

export const Read_Only = () => {
  const [value, setValue] = useState("");

  return (
    <NativeSelectField
      name="framework"
      label="Choose a framework:"
      placeholder="Choose your favorite framework"
      options={[
        { value: "react", label: "React" },
        { value: "angular", label: "Angular" },
        { value: "vue", label: "Vue" },
      ]}
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
      readOnly
    />
  );
};

export const Disabled = () => {
  const [value, setValue] = useState("");

  return (
    <NativeSelectField
      name="framework"
      label="Choose a framework:"
      placeholder="Choose your favorite framework"
      options={[
        { value: "react", label: "React" },
        { value: "angular", label: "Angular" },
        { value: "vue", label: "Vue" },
      ]}
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
      disabled
    />
  );
};

export const useForm_Example = () => {
  const { register } = useForm({
    fields: {
      hook_native_select: {
        value: "",
      },
    },
  });

  return (
    <NativeSelectField
      label="Controlled NativeSelectField"
      placeholder="Controlled Field"
      options={[
        { value: "react", label: "React" },
        { value: "angular", label: "Angular" },
        { value: "vue", label: "Vue" },
      ]}
      {...register("hook_native_select")}
    />
  );
};
