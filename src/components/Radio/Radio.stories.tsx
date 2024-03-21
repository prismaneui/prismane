import { useState } from "react";
// Components
import Form from "../Form/Form";
import Radio from "./Radio";
import Button from "../Button/Button";
import Flex from "../Flex/Flex";
// Hooks
import useForm from "../../hooks/useForm";

export default {
  title: "Radio",
  component: Radio,
};

export const Default = () => {
  const [value, setValue] = useState("yes");

  return (
    <Radio.Group
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
      name="answer"
    >
      <Radio value="yes" label="Yes" />
      <Radio value="no" label="No" />
    </Radio.Group>
  );
};

export const useFormHook = () => {
  const { handleSubmit, handleReset, register, getValue } = useForm({
    fields: {
      answer: {
        value: "yes",
      },
    },
  });

  return (
    <Form
      onSubmit={(e: any) => {
        handleSubmit(e, (v: any) => console.log(v));
      }}
      onReset={() => handleReset()}
      className="max-w-[300px]"
    >
      <Flex align="center" gap={2} mb={4}>
        <Radio.Group {...register("answer")}>
          <Radio value="yes" label="Yes" />
          <Radio value="no" label="No" />
        </Radio.Group>
      </Flex>
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
  const { handleSubmit, handleReset, register, getValue } = useForm({
    fields: {
      answer: {
        value: "yes",
      },
    },
  });

  return (
    <Form
      onSubmit={(e: any) => {
        handleSubmit(e, (v: any) => console.log(v));
      }}
      onReset={() => handleReset()}
      className="max-w-[300px]"
    >
      <Flex gap={2} mb={4} direction="column">
        <Radio.Group {...register("answer")} size="xs">
          <Radio value="yes" label="Yes" />
          <Radio value="no" label="No" />
        </Radio.Group>
        <Radio.Group {...register("answer")} size="sm">
          <Radio value="yes" label="Yes" />
          <Radio value="no" label="No" />
        </Radio.Group>
        <Radio.Group {...register("answer")} size="base">
          <Radio value="yes" label="Yes" />
          <Radio value="no" label="No" />
        </Radio.Group>
        <Radio.Group {...register("answer")} size="md">
          <Radio value="yes" label="Yes" />
          <Radio value="no" label="No" />
        </Radio.Group>
        <Radio.Group {...register("answer")} size="lg">
          <Radio value="yes" label="Yes" />
          <Radio value="no" label="No" />
        </Radio.Group>
      </Flex>
    </Form>
  );
};

export const Group_Label_And_Error = () => {
  const { handleSubmit, handleReset, register, getValue } = useForm({
    fields: {
      answer: {
        value: "yes",
      },
    },
  });

  return (
    <Radio.Group
      {...register("answer")}
      label="Radio Group Label"
      error="Radio Group Error"
    >
      <Radio value="yes" label="Yes" />
      <Radio value="no" label="No" />
    </Radio.Group>
  );
};
