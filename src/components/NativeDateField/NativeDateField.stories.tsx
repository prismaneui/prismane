import { useState } from "react";
// Components
import NativeDateField from "../NativeDateField/NativeDateField";
// Hooks
import { useForm } from "../../hooks";

export default {
  tags: ["autodocs"],
  title: "Components/Inputs/NativeDateField",
  component: NativeDateField,
};

export const Default = () => <NativeDateField name="date" />;

export const Controlled = () => {
  const [date, setDate] = useState("");

  return (
    <NativeDateField
      name="date"
      value={date}
      onChange={(e: any) => setDate(e.target.value)}
    />
  );
};

export const Read_Only = () => {
  const [date, setDate] = useState("");

  return (
    <NativeDateField
      placeholder="No date chosen"
      label="Choose a date:"
      value={date}
      onChange={(e: any) => setDate(e.target.value)}
      readOnly
    />
  );
};

export const Disabled = () => {
  const [date, setDate] = useState("");

  return (
    <NativeDateField
      placeholder="No date chosen"
      label="Choose a date:"
      value={date}
      onChange={(e: any) => setDate(e.target.value)}
      disabled
    />
  );
};

export const useForm_Example = () => {
  const { register } = useForm({
    fields: {
      hook_native_date: {
        value: "",
      },
    },
  });

  return (
    <NativeDateField
      label="Controlled NativeDateField"
      placeholder="Controlled Field"
      {...register("hook_native_date")}
    />
  );
};
