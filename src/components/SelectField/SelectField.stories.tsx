import { useState } from "react";
// Components
import SelectField from "./SelectField";
import Flex from "../Flex/Flex";
// Hooks
import useForm from "../../hooks/useForm";
// Utils
import { fr } from "../../utils";

export default {
  tags: ["autodocs"],
  title: "Components/Inputs/SelectField",
  component: SelectField,
};

export const Default = () => {
  const [framework, setFramework] = useState("");

  return (
    <SelectField
      label="Name:"
      placeholder="Pick a framework"
      value={framework}
      onChange={(e: any) => setFramework(e.target.value)}
      options={[
        { value: "react", element: "React" },
        { value: "olivia", element: "Angular" },
        { value: "vue", element: "Vue" },
      ]}
    />
  );
};

export const Scrollable_Dropdown = () => {
  const [value, setValue] = useState("");

  return (
    <SelectField
      placeholder="Scrollable Field"
      label="Scrollable Field:"
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
      options={[
        { value: "liam", element: "Liam" },
        { value: "olivia", element: "Olivia" },
        { value: "noah", element: "Noah" },
        { value: "emma", element: "Emma" },
        { value: "ava", element: "Ava" },
        { value: "isabella", element: "Isabella" },
        { value: "sophia", element: "Sophia" },
        { value: "michael", element: "Michael" },
        { value: "william", element: "William" },
        { value: "james", element: "James" },
        { value: "benjamin", element: "Benjamin" },
        { value: "elijah", element: "Elijah" },
        { value: "lucas", element: "Lucas" },
        { value: "alexander", element: "Alexander" },
        { value: "oliver", element: "Oliver" },
        { value: "ethan", element: "Ethan" },
        { value: "david", element: "David" },
        { value: "jackson", element: "Jackson" },
        { value: "mason", element: "Mason" },
        { value: "sebastian", element: "Sebastian" },
      ]}
    />
  );
};

export const Custom_Option = () => {
  const [value, setValue] = useState("");

  return (
    <SelectField
      placeholder="Choose a name"
      label="Name:"
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
      options={[
        { value: "liam", element: "Liam" },
        { value: "olivia", element: "Olivia" },
        { value: "noah", element: "Noah" },
        { value: "emma", element: "Emma" },
        { value: "ava", element: "Ava" },
      ]}
      item={(chosen, value, element, active) => (
        <Flex
          px={fr(4)}
          py={fr(2)}
          fs="sm"
          cl={(theme) =>
            chosen ? "primary" : theme.mode === "dark" ? "white" : ["base", 900]
          }
          bg={(theme) =>
            active
              ? theme.mode === "dark"
                ? ["base", 900, 0.2]
                : ["base", 100, 0.2]
              : "transparent"
          }
        >
          {element}
        </Flex>
      )}
    />
  );
};

export const Read_Only = () => {
  const [value, setValue] = useState("");

  return (
    <SelectField
      placeholder="This field is read only"
      label="Choose a name:"
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
      options={[
        { value: "liam", element: "Liam" },
        { value: "olivia", element: "Olivia" },
        { value: "noah", element: "Noah" },
        { value: "emma", element: "Emma" },
        { value: "ava", element: "Ava" },
      ]}
      readOnly
    />
  );
};

export const Disabled = () => {
  const [value, setValue] = useState("");

  return (
    <SelectField
      placeholder="This field is disabled"
      label="Choose a name:"
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
      options={[
        { value: "liam", element: "Liam" },
        { value: "olivia", element: "Olivia" },
        { value: "noah", element: "Noah" },
        { value: "emma", element: "Emma" },
        { value: "ava", element: "Ava" },
      ]}
      disabled
    />
  );
};

export const useForm_Example = () => {
  const { register } = useForm({
    fields: {
      hook_select: {
        value: "",
      },
    },
  });

  return (
    <SelectField
      label="Controlled SelectField"
      placeholder="Controlled Field"
      options={[
        { value: "liam", element: "Liam" },
        { value: "olivia", element: "Olivia" },
        { value: "noah", element: "Noah" },
        { value: "emma", element: "Emma" },
        { value: "ava", element: "Ava" },
      ]}
      {...register("hook_select")}
    />
  );
};
