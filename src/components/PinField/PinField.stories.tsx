import { useState } from "react";
// Components
import PinField from "./PinField";
// Hooks
import useForm from "../../hooks/useForm";

export default {
  tags: ["autodocs"],
  title: "Components/Inputs/PinField",
  component: PinField,
};

export const Default = () => {
  const [pin, setPin] = useState("");

  return (
    <PinField
      label="Enter a pin:"
      value={pin}
      onChange={(e: any) => setPin(e.target.value)}
    />
  );
};

export const Length = () => {
  const [pin, setPin] = useState("");

  return (
    <PinField
      label="Enter a 6 digit pin:"
      value={pin}
      onChange={(e: any) => setPin(e.target.value)}
      length={6}
    />
  );
};

export const Masked = () => {
  const [pin, setPin] = useState("");

  return (
    <PinField
      label="This pin is hidden:"
      value={pin}
      onChange={(e: any) => setPin(e.target.value)}
      masked
    />
  );
};

export const Read_Only = () => {
  const [pin, setPin] = useState("");

  return (
    <PinField
      label="This field is read only:"
      value={pin}
      onChange={(e: any) => setPin(e.target.value)}
      readOnly
    />
  );
};

export const Disabled = () => {
  const [pin, setPin] = useState("");

  return (
    <PinField
      label="This field is disabled:"
      value={pin}
      onChange={(e: any) => setPin(e.target.value)}
      disabled
    />
  );
};

export const useForm_Example = () => {
  const { register } = useForm({
    fields: {
      hook_pin: {
        value: "",
      },
    },
  });

  return (
    <PinField
      label="Controlled PinField"
      placeholder="Controlled Field"
      {...register("hook_pin")}
    />
  );
};
