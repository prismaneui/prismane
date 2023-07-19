// Components
import Form from "../Form/Form";
import AutocompleteField from "../AutocompleteField/AutocompleteField";
// Hooks
import useForm from "../../hooks/useForm";
// Utils
import { fr } from "../../utils";

export default {
  title: "AutocompleteField",
  component: AutocompleteField,
};

export const Default = () => {
  const { handleSubmit, handleReset, register } = useForm({
    fields: {
      field: {
        value: "",
      },
    },
  });

  return (
    <Form
      onSubmit={(e: any) => {
        handleSubmit(e, (v: any) => console.log(v));
      }}
      onReset={() => handleReset()}
      w={fr(96)}
    >
      <AutocompleteField
        {...register("field")}
        placeholder="Default Field"
        label="Default Field:"
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
    </Form>
  );
};
