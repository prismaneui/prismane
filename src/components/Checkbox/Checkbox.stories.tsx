import React, { FormEvent, useState } from "react";
import { Radioactive } from "@phosphor-icons/react";
// Components
import Form from "../Form/Form";
import Checkbox from "./Checkbox";
import Flex from "../Flex/Flex";
import Button from "../Button/Button";
import Stack from "../Stack";
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

export const Indeterminate_Checkbox = () => {
  const [checkedItems, setCheckedItems] = useState<any>([false, false]);

  const checked: any = checkedItems.every(Boolean);
  const indeterminate = checkedItems.some(Boolean) && !checked;

  return (
    <Stack w="100%" align="center">
      <Checkbox
        label="Receive updates about Prismane"
        value={checked}
        indeterminate={indeterminate}
        onChange={(e: any) => setCheckedItems([!checked, !checked])}
      />
      <Stack pl={fr(6)} mt={fr(1)}>
        <Checkbox
          label="Receive version updates"
          value={checkedItems[0]}
          onChange={(e: any) =>
            setCheckedItems([!checkedItems[0], checkedItems[1]])
          }
        />
        <Checkbox
          label="Receive event updates"
          value={checkedItems[1]}
          onChange={(e: any) =>
            setCheckedItems([checkedItems[0], !checkedItems[1]])
          }
        />
      </Stack>
    </Stack>
  );
};

export const Vanilla_Form = () => (
  <Stack w="100%" align="center">
    <form
      style={{
        width: 100,
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
      onSubmit={(e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        console.log(formProps);
      }}
    >
      <Checkbox name="checkbox1" value="1" checked />
      <Checkbox name="checkbox2" value="2" defaultChecked />
      <input type="text" value="dadadada" name="ivan" />
      <Button type="submit">Submit</Button>
    </form>
  </Stack>
);

export const Custom_Icon = () => (
  <Checkbox name="checkbox" icon={<Radioactive weight="bold" />} checked />
);
