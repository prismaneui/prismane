// Components
import Form from "../Form/Form";
import ColorField from "./ColorField";
// Hooks
import useForm from "../../hooks/useForm";
// Utils
import { fr } from "../../utils";

export default {
  title: "ColorField",
  component: ColorField,
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
      <ColorField
        {...register("field")}
        placeholder="Default Field"
        label="Default Field:"
      />
    </Form>
  );
};

export const Custom = () => {
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
      <ColorField
        {...register("field")}
        placeholder="Default Field"
        label="Default Field:"
        options={["blue", "#bff5cc"]}
      />
    </Form>
  );
};
