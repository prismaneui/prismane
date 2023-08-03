// Components
import Form from "../Form/Form";
import PinField from "./PinField";
import Button from "../Button/Button";
// Hooks
import useForm from "../../hooks/useForm";
// Utils
import { fr } from "../../utils";

export default {
  title: "PinField",
  component: PinField,
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
      w={fr(150)}
    >
      <PinField
        {...register("field")}
        placeholder="Default Field"
        label="Default Field:"
        variant="outlined"
      />
      <Button type="submit" my={16}>
        Submit
      </Button>
    </Form>
  );
};

export const Masked = () => {
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
      w={fr(150)}
    >
      <PinField
        {...register("field")}
        placeholder="Default Field"
        label="Default Field:"
        variant="underlined"
        length={6}
        masked
      />
      <Button type="submit" my={16}>
        Submit
      </Button>
    </Form>
  );
};
