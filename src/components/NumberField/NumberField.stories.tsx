import { EnvelopeSimple } from "@phosphor-icons/react";
// Components
import Form from "../Form/Form";
import NumberField from "../NumberField/NumberField";
// Hooks
import useForm from "../../hooks/useForm";
// Utils
import { fr } from "../../utils";

export default {
  title: "NumberField",
  component: NumberField,
};

export const Default = () => {
  const { handleSubmit, handleReset, register } = useForm({
    fields: {
      field: {
        value: 0,
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
      <NumberField
        {...register("field")}
        placeholder="Default Field"
        label="Default Field:"
        max={5}
        min={-10}
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
      <NumberField
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
      <NumberField
        {...register("field")}
        placeholder="Default Field"
        label="Default Field:"
        icon={<EnvelopeSimple />}
        readOnly
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
      <NumberField
        {...register("field")}
        placeholder="Default Field"
        label="Default Field:"
        icon={<EnvelopeSimple />}
      />
    </Form>
  );
};
