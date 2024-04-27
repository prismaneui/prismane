import { useState } from "react";
// Components
import SegmentedField from "./SegmentedField";
// Hooks
import useForm from "../../hooks/useForm";

export default {
  tags: ["autodocs"],
  title: "Components/Inputs/SegmentedField",
  component: SegmentedField,
};

export const Default = () => {
  const [value, setValue] = useState("star");

  return (
    <SegmentedField
      label="Choose a shape:"
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
      options={[
        { element: "Star", value: "star" },
        { element: "Circle", value: "circle" },
        { element: "Square", value: "square" },
      ]}
    />
  );
};

export const Read_Only = () => {
  const [value, setValue] = useState("star");

  return (
    <SegmentedField
      label="Choose a shape:"
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
      options={[
        { element: "Star", value: "star" },
        { element: "Circle", value: "circle" },
        { element: "Square", value: "square" },
      ]}
      readOnly
    />
  );
};

export const Disabled = () => {
  const [value, setValue] = useState("star");

  return (
    <SegmentedField
      label="Choose a shape:"
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
      options={[
        { element: "Star", value: "star" },
        { element: "Circle", value: "circle" },
        { element: "Square", value: "square" },
      ]}
      disabled
    />
  );
};

export const useForm_Example = () => {
  const { register } = useForm({
    fields: {
      hook_segmented: {
        value: "star",
      },
    },
  });

  return (
    <SegmentedField
      label="Controlled SegmentedField"
      placeholder="Controlled Field"
      options={[
        { element: "Star", value: "star" },
        { element: "Circle", value: "circle" },
        { element: "Square", value: "square" },
      ]}
      {...register("hook_segmented")}
    />
  );
};
