// Components
import Form from "../Form/Form";
import NativeSelectField from "../NativeSelectField/NativeSelectField";
// Hooks
import useForm from "../../hooks/useForm";
// Utils
import { fr } from "../../utils";

export default {
  title: "NativeSelectField",
  component: NativeSelectField,
};

export const Default = () => {
  const { handleSubmit, handleReset, register } = useForm({
    fields: {
      field: {
        value: "Yes",
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
      <NativeSelectField
        {...register("field")}
        placeholder="Default Field"
        label="Default Field:"
        options={[
          { value: "ivan", element: "Ivan" },
          { value: "gosho", element: "Gosho" },
          { value: "petkan", element: "Petkan" },
        ]}
      />
    </Form>
  );
};
