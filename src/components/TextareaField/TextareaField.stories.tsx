import { Meta } from "@storybook/react";
import { EnvelopeSimple } from "@phosphor-icons/react";
// Components
import Form from "../Form/Form";
import TextareaField from "./TextareaField";
// Hooks
import useForm from "../../hooks/useForm";
// Utils
import { fr } from "../../utils";

export default {
  title: "TextareaField",
  component: TextareaField,
} as Meta;

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
      <TextareaField
        {...register("field")}
        placeholder="Default Field"
        label="Default Field:"
      />
    </Form>
  );
};

export const Icon = () => {
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
      <TextareaField
        {...register("field")}
        placeholder="Default Field"
        label="Default Field:"
        icon={<EnvelopeSimple />}
      />
    </Form>
  );
};

export const ReadOnly = () => {
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
      <TextareaField
        {...register("field")}
        placeholder="Default Field"
        label="Default Field:"
        icon={<EnvelopeSimple />}
        validating
      />
    </Form>
  );
};

export const DefaultValue = () => {
  const { handleSubmit, handleReset, register } = useForm({
    fields: {
      field: {
        value: "Default value",
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
      <TextareaField
        {...register("field")}
        placeholder="Default Field"
        label="Default Field:"
        icon={<EnvelopeSimple />}
      />
    </Form>
  );
};

export const Validating = () => {
  const { handleSubmit, handleReset, register } = useForm({
    fields: {
      field: {
        value: "Default value",
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
      <TextareaField
        {...register("field")}
        placeholder="Default Field"
        label="Default Field:"
        icon={<EnvelopeSimple />}
        validating
      />
    </Form>
  );
};
