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
          { value: "ivan", label: "Ivan" },
          { value: "gosho", label: "Gosho" },
          { value: "petkan", label: "Petkan" },
        ]}
      />
    </Form>
  );
};
