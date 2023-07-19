import { EnvelopeSimple } from "@phosphor-icons/react";
// Components
import Form from "../Form/Form";
import TextField from "./TextField";
// Hooks
import useForm from "../../hooks/useForm";
// Utils
import { fr } from "../../utils";

export default {
  title: "TextField",
  component: TextField,
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
      <TextField
        {...register("field")}
        placeholder="Default Field"
        label="Default Field:"
        variant="outlined"
      />
      <TextField
        {...register("field")}
        placeholder="Default Field"
        label="Default Field:"
        variant="underlined"
      />
      <TextField
        {...register("field")}
        placeholder="Default Field"
        label="Default Field:"
        variant="filled"
      />
      <TextField
        {...register("field")}
        placeholder="Default Field"
        label="Default Field:"
        variant="unstyled"
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
      w={fr(150)}
    >
      <TextField
        {...register("field")}
        placeholder="Default Field"
        label="Default Field:"
        icon={<EnvelopeSimple />}
      />
    </Form>
  );
};

export const No_Name = () => {
  return <TextField placeholder="Default Field" label="Default Field:" />;
};

export const Prefix = () => {
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
      <TextField
        {...register("field")}
        placeholder="Default Field"
        label="Default Field:"
        // icon={<EnvelopeSimple />}
        prefix="https://"
      />
    </Form>
  );
};

export const Suffix = () => {
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
      <TextField
        {...register("field")}
        placeholder="Default Field"
        label="Default Field:"
        icon={<EnvelopeSimple />}
        suffix=".com"
      />
    </Form>
  );
};

export const ReadOnly = () => {
  const { handleSubmit, handleReset, register } = useForm({
    fields: {
      field: {
        value: "Ivan The Great",
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
      <TextField
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
      w={fr(150)}
    >
      <TextField
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
      w={fr(150)}
    >
      <TextField
        {...register("field")}
        placeholder="Default Field"
        label="Default Field:"
        icon={<EnvelopeSimple />}
        validating
      />
    </Form>
  );
};
