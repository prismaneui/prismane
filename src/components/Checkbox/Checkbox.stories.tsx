import React, { useState } from "react";
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
      onSubmit={(e: any) => {
        handleSubmit(e, (v: any) => console.log(v));
      }}
      onReset={() => handleReset()}
      maw={fr(75)}
    >
      <Checkbox {...register("answer")} label="Checkbox label" />
      <Checkbox {...register("answer")} label="Checkbox label" indeterminate />
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

export const No_Name = () => {
  const [value, setValue] = useState(false);

  return (
    <Checkbox
      value={value.toString()}
      onChange={(e: any) => setValue(e.target.checked)}
      label="No name checkbox"
    />
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
      onSubmit={(e: any) => {
        handleSubmit(e, (v: any) => console.log(v));
      }}
      onReset={() => handleReset()}
      maw={fr(75)}
    >
      <Checkbox
        {...register("answer")}
        size="xs"
        label="Demo label to check size"
      />
      <Checkbox
        {...register("answer")}
        size="sm"
        label="Demo label to check size"
      />
      <Checkbox
        {...register("answer")}
        size="base"
        label="Demo label to check size"
      />
      <Checkbox
        {...register("answer")}
        size="md"
        label="Demo label to check size"
      />
      <Checkbox
        {...register("answer")}
        size="lg"
        label="Demo label to check size"
      />
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
