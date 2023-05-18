import React from "react";
// Components
import Form from "../Form/Form";
import Checkbox from "./Checkbox";
import Flex from "../Flex/Flex";
import Button from "../Button/Button";
// Hooks
import useForm from "../../hooks/useForm";
// Utils
import { fr } from "../../utils";

export default {
  title: "Checkbox",
  component: Checkbox,
};

export const Default = () => {
  const { handleSubmit, handleReset, register } = useForm({
    fields: {
      answer: {
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
      maw={fr(75)}
    >
      <Checkbox {...register("answer")} />
      <Checkbox {...register("answer")} indeterminate />
      <Flex align="center" gap={fr(2)} mt={fr(4)}>
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
      answer: {
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
      maw={fr(75)}
    >
      <Checkbox {...register("answer")} size="xs" />
      <Checkbox {...register("answer")} size="sm" />
      <Checkbox {...register("answer")} size="base" />
      <Checkbox {...register("answer")} size="md" />
      <Checkbox {...register("answer")} size="lg" />
      <Flex align="center" gap={fr(2)} mt={fr(4)}>
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
