import { useState } from "react";
// Components
import ColorField from "./ColorField";
// Hooks
import useForm from "../../hooks/useForm";

export default {
  tags: ["autodocs"],
  title: "Components/Inputs/ColorField",
  component: ColorField,
};

export const Default = () => {
  const [color, setColor] = useState("");

  return (
    <ColorField
      placeholder="No color chosen"
      label="Choose a color:"
      value={color}
      onChange={(e: any) => setColor(e.target.value)}
    />
  );
};

export const Custom_Colors = () => {
  const [color, setColor] = useState("");

  return (
    <ColorField
      options={[
        "teal",
        "amethyst",
        "ruby",
        "diamond",
        "coal",
        "#1e1e1e",
        "#3e3e3e",
      ]}
      placeholder="No color chosen"
      label="Custom color:"
      value={color}
      onChange={(e: any) => setColor(e.target.value)}
    />
  );
};

export const Read_Only = () => {
  const [color, setColor] = useState("");

  return (
    <ColorField
      placeholder="No color chosen"
      label="Choose a color:"
      value={color}
      onChange={(e: any) => setColor(e.target.value)}
      readOnly
    />
  );
};

export const Disabled = () => {
  const [color, setColor] = useState("");

  return (
    <ColorField
      placeholder="No color chosen"
      label="Choose a color:"
      value={color}
      onChange={(e: any) => setColor(e.target.value)}
      disabled
    />
  );
};

export const useForm_Example = () => {
  const { register } = useForm({
    fields: {
      hook_color: {
        value: "",
      },
    },
  });

  return (
    <ColorField
      label="Controlled ColorField"
      placeholder="Controlled Field"
      {...register("hook_color")}
    />
  );
};
