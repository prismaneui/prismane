import { useState } from "react";
// Components
import Checkbox from "./Checkbox";
import Stack from "../Stack";
// Hooks
import useForm from "../../hooks/useForm";
// Utils
import { fr } from "../../utils";

export default {
  tags: ["autodocs"],
  title: "Components/Inputs/Checkbox",
  component: Checkbox,
};

export const Default = () => {
  const [value, setValue] = useState(false);

  return (
    <Checkbox
      label="Checkbox"
      name="checkbox"
      value={value as any}
      onChange={(e: any) => setValue(e.target.checked)}
    />
  );
};

export const Disabled = () => (
  <>
    <Checkbox label="I am disabled" name="disabled" disabled />
    <Checkbox
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
      <Checkbox
        size="xs"
        label="xs"
        value={value}
        onChange={(e: any) => setValue(e.target.checked)}
      />
      <Checkbox
        size="sm"
        label="sm"
        value={value}
        onChange={(e: any) => setValue(e.target.checked)}
      />
      <Checkbox
        size="base"
        label="base"
        value={value}
        onChange={(e: any) => setValue(e.target.checked)}
      />
      <Checkbox
        size="md"
        label="md"
        value={value}
        onChange={(e: any) => setValue(e.target.checked)}
      />
      <Checkbox
        size="lg"
        label="lg"
        value={value}
        onChange={(e: any) => setValue(e.target.checked)}
      />
    </>
  );
};

export const Indeterminate = () => {
  const [checkedItems, setCheckedItems] = useState([false, false]);

  const checked = checkedItems.every(Boolean);
  const indeterminate = checkedItems.some(Boolean) && !checked;

  return (
    <Stack>
      <Checkbox
        label="Receive updates about Prismane"
        value={checked as any}
        indeterminate={indeterminate}
        onChange={() => setCheckedItems([!checked, !checked])}
      />
      <Stack pl={fr(7)} mt={fr(1)}>
        <Checkbox
          label="Receive version updates"
          value={checkedItems[0] as any}
          onChange={() => setCheckedItems([!checkedItems[0], checkedItems[1]])}
        />
        <Checkbox
          label="Receive event updates"
          value={checkedItems[1] as any}
          onChange={() => setCheckedItems([checkedItems[0], !checkedItems[1]])}
        />
      </Stack>
    </Stack>
  );
};

export const useForm_Example = () => {
  const { register } = useForm({
    fields: {
      hook_checkbox: {
        value: false,
      },
    },
  });

  return (
    <Checkbox label="Controlled Checkbox" {...register("hook_checkbox")} />
  );
};
