// Components
import Form from "../../components/Form";
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Flex from "../../components/Flex/Flex";
// Utils
import { required, username, min } from "../../validators";
// Hooks
import useForm from "./useForm";

export default {
  title: "useForm",
  component: useForm,
};

export const Default = () => {
  const backend = async (v: string) => {
    return null;
  };

  const { handleSubmit, handleReset, register } = useForm({
    fields: {
      username: {
        value: "",
        validators: {
          required: (v: string) => required(v),
          min: (v: string) => min(v, 4),
          username: (v: string) => username(v),
          backend: async (v: string) => await backend(v),
        },
      },
    },
  });

  return (
    <Card className="!p-5">
      <Form
        onSubmit={(e: any) => {
          handleSubmit(e, (v: any) => console.log(v));
        }}
        onReset={() => handleReset()}
        className="max-w-[300px]"
      >
        <TextField
          placeholder="Enter username: "
          label="Username:"
          {...register("username")}
        />
        <Flex align="center" gap={2}>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="primary" type="reset">
            Reset
          </Button>
        </Flex>
      </Form>
    </Card>
  );
};
