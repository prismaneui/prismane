// Components
import Form from "../Form/Form";
import SelectField from "../SelectField/SelectField";
// Hooks
import useForm from "../../hooks/useForm";
// Utils
import { fr } from "../../utils";

export default {
  title: "SelectField",
  component: SelectField,
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
      <SelectField
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
