import React from "react";
import { Star, Circle, Square } from "@phosphor-icons/react";
// Components
import SegmentedField from "./SegmentedField";
import Form from "../Form/Form";
import Button from "../Button/Button";
import Flex from "../Flex/Flex";
// Hooks
import useForm from "../../hooks/useForm";

export default {
  title: "SegmentedField",
  component: SegmentedField,
};

export const Default = () => {
  const { handleSubmit, handleReset, register } = useForm({
    fields: {
      shape: {
        value: "star",
      },
    },
  });

  return (
    <Form
      onSubmit={(e) => {
        handleSubmit(e, (v: any) => console.log(v));
      }}
      onReset={() => handleReset()}
    >
      <div className="flex gap-5 flex-col">
        <SegmentedField
          {...register("shape")}
          options={[
            { element: "Star", value: "star" },
            { element: "Circle", value: "circle" },
            { element: "Square", value: "square" },
          ]}
        />
      </div>
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

export const PrismaneBreakpoints = () => {
  const { handleSubmit, handleReset, register } = useForm({
    fields: {
      shape: {
        value: "star",
      },
    },
  });

  return (
    <Form
      onSubmit={(e) => {
        handleSubmit(e, (v: any) => console.log(v));
      }}
      onReset={() => handleReset()}
    >
      <Flex direction="column" gap={2}>
        <SegmentedField
          {...register("shape")}
          options={[
            { element: "Star", value: "star" },
            { element: "Circle", value: "circle" },
            { element: "Square", value: "square" },
          ]}
          size="xs"
        />
        <SegmentedField
          {...register("shape")}
          options={[
            { element: "Star", value: "star" },
            { element: "Circle", value: "circle" },
            { element: "Square", value: "square" },
          ]}
          size="sm"
        />
        <SegmentedField
          {...register("shape")}
          options={[
            { element: "Star", value: "star" },
            { element: "Circle", value: "circle" },
            { element: "Square", value: "square" },
          ]}
          size="base"
        />
        <SegmentedField
          {...register("shape")}
          options={[
            { element: "Star", value: "star" },
            { element: "Circle", value: "circle" },
            { element: "Square", value: "square" },
          ]}
          size="md"
        />
        <SegmentedField
          {...register("shape")}
          options={[
            { element: "Star", value: "star" },
            { element: "Circle", value: "circle" },
            { element: "Square", value: "square" },
          ]}
          size="lg"
        />
      </Flex>
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
