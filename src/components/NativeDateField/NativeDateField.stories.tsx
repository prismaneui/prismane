// Components
import Form from "../Form/Form";
import NativeDateField from "../NativeDateField/NativeDateField";
// Hooks
import useForm from "../../hooks/useForm";
// Utils
import { fr } from "../../utils";

export default {
  title: "NativeDateField",
  component: NativeDateField,
};

export const Default = () => {
  const { handleSubmit, handleReset, register } = useForm({
    fields: {
      field: {
        value: "No",
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
      <NativeDateField
        {...register("field")}
        placeholder="Default Field"
        label="Default Field:"
      />
    </Form>
  );
};
