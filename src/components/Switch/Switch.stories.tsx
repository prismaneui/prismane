import React from "react";
// Components
import Form from "../Form/Form";
import Switch from "./Switch";
import Button from "../Button";
import Flex from "../Flex";
// Hooks
import useForm from "../../hooks/useForm";

export default {
  title: "Switch",
  component: Switch,
};

export const Default = () => {
  const { handleSubmit, handleReset, register } = useForm({
    fields: {
      username: {
        value: false,
      },
    },
  });

  return (
    <Form
      onSubmit={(e) => {
        handleSubmit(e, (v: any) => console.log(v));
      }}
      onReset={() => handleReset()}
      className="max-w-[300px]"
    >
      <Switch {...register("username")} />
      <Flex align="center" gap={2}>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="primary" type="reset">
          Reset
        </Button>
      </Flex>
    </Form>
  );
};

export const PrismaneBreakpoints = () => {
  const { handleSubmit, handleReset, register } = useForm({
    fields: {
      username: {
        value: false,
      },
    },
  });

  return (
    <Form
      onSubmit={(e) => {
        handleSubmit(e, (v: any) => console.log(v));
      }}
      onReset={() => handleReset()}
      className="max-w-[300px]"
    >
      <Switch {...register("username")} size="xs" mt={5} />
      <Switch {...register("username")} size="sm" mt={5} />
      <Switch {...register("username")} size="base" mt={5} />
      <Switch {...register("username")} size="md" mt={5} />
      <Switch {...register("username")} size="lg" mt={5} />
      <Flex align="center" gap={2} mt={4}>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="primary" type="reset">
          Reset
        </Button>
      </Flex>
    </Form>
  );
};
