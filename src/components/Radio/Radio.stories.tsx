import React, { useState } from "react";
// Components
import Radio from "./Radio";
// Hooks
import useForm from "../../hooks/useForm";

export default {
  tags: ["autodocs"],
  title: "Components/Inputs/Radio",
  component: Radio,
};

export const Default = () => <Radio label="I am always toggled!" />;

export const Radio_Group = () => {
  const [value, setValue] = useState("yes");

  return (
    <Radio.Group
      label="Choose an answer:"
      name="answer"
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
    >
      <Radio value="yes" label="Yes" />
      <Radio value="no" label="No" />
    </Radio.Group>
  );
};

export const Read_Only = () => <Radio label="I cannot be changed!" readOnly />;

export const Disabled = () => <Radio label="I am disabled!" disabled />;

export const useForm_Example = () => {
  const { register } = useForm({
    fields: {
      hook_radio: {
        value: "yes",
      },
    },
  });

  return (
    <Radio.Group label="Choose an answer:" {...register("hook_radio")}>
      <Radio label="Yes" value="yes" />
      <Radio label="No" value="no" />
    </Radio.Group>
  );
};
