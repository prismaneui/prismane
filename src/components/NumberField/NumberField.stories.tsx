import { useState } from "react";
// Components
import NumberField from "../NumberField/NumberField";
// Hooks
import useForm from "../../hooks/useForm";

export default {
  tags: ["autodocs"],
  title: "Components/Inputs/NumberField",
  component: NumberField,
};

export const Default = () => {
  const [value, setValue] = useState(0);

  return (
    <NumberField
      label="Increment and decrement:"
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
    />
  );
};

export const Min_Limit = () => {
  const [value, setValue] = useState(10);

  return (
    <NumberField
      label="Decrement the value:"
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
      min={5}
    />
  );
};

export const Max_Limit = () => {
  const [value, setValue] = useState(10);

  return (
    <NumberField
      label="Increment the value:"
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
      max={15}
    />
  );
};

export const Read_Only = () => {
  const [value, setValue] = useState(0);

  return (
    <NumberField
      label="Choose a number:"
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
      readOnly
    />
  );
};

export const Disabled = () => {
  const [value, setValue] = useState(0);

  return (
    <NumberField
      label="Choose a number:"
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
      disabled
    />
  );
};

export const useForm_Example = () => {
  const { register } = useForm({
    fields: {
      hook_number: {
        value: 0,
      },
    },
  });

  return (
    <NumberField
      label="Controlled NumberField"
      placeholder="Controlled Field"
      {...register("hook_number")}
    />
  );
};
