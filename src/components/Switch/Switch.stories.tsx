import React, { useState } from "react";
// Components
import Switch from "./Switch";
// Hooks
import useForm from "../../hooks/useForm";

export default {
  tags: ["autodocs"],
  title: "Components/Inputs/Switch",
  component: Switch,
};

export const Default = () => {
  const [value, setValue] = useState(false);

  return (
    <Switch
      label="Switch"
      name="switch"
      value={value as any}
      onChange={(e: any) => setValue(e.target.checked)}
    />
  );
};

export const Disabled = () => (
  <>
    <Switch label="I am disabled" name="disabled" disabled />
    <Switch
      label="I am checked and disabled"
      name="checked_disabled"
      value={true as any}
      disabled
    />
  </>
);

export const Sizes = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <Switch
        size="xs"
        label="xs"
        value={value}
        onChange={(e: any) => setValue(e.target.checked)}
      />
      <Switch
        size="sm"
        label="sm"
        value={value}
        onChange={(e: any) => setValue(e.target.checked)}
      />
      <Switch
        size="base"
        label="base"
        value={value}
        onChange={(e: any) => setValue(e.target.checked)}
      />
      <Switch
        size="md"
        label="md"
        value={value}
        onChange={(e: any) => setValue(e.target.checked)}
      />
      <Switch
        size="lg"
        label="lg"
        value={value}
        onChange={(e: any) => setValue(e.target.checked)}
      />
    </>
  );
};

export const useForm_Example = () => {
  const { register } = useForm({
    fields: {
      hook_switch: {
        value: false,
      },
    },
  });

  return <Switch label="Controlled Switch" {...register("hook_switch")} />;
};
