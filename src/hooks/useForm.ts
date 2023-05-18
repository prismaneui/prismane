import { ChangeEvent, KeyboardEventHandler, useState } from "react";

export type InitialFormState = {
  fields?: InitialFields;
  validateOn?: "change" | "blur" | "all";
  resetOptions?: {
    keepDirty?: boolean;
    keepTouched?: boolean;
    keepErrors?: boolean;
  };
};

export type FormState = {
  fields: Fields;
  validateOn: "change" | "blur" | "all";
  resetOptions: {
    keepDirty: boolean;
    keepTouched: boolean;
    keepErrors: boolean;
  };
};

export type InitialField = {
  value: Value;
  error?: null | string;
  validators?: Validators;
};

export type InitialFields = {
  [x: string]: InitialField;
};

export type Field = {
  value: Value;
  error: null | string;
  validators: Validators;
  isDirty: boolean;
  isTouched: boolean;
};

export type Fields = {
  [x: string]: Field;
};

export type Validator = (v: string) => null | string;

export type Validators = { [x: string]: Validator };

export type Value = any;

export type Values = {
  [x: string]: Value;
};

export type Error = string | null;

export type Errors = {
  [x: string]: Error;
};

export const useForm = (initialForm: InitialFormState = {}) => {
  const [formState, setFormState] = useState(() => {
    const state: FormState = {
      fields: {},
      validateOn: initialForm.validateOn ? initialForm.validateOn : "all",
      resetOptions: initialForm.resetOptions
        ? {
            keepDirty: initialForm.resetOptions.keepDirty || false,
            keepTouched: initialForm.resetOptions.keepTouched || false,
            keepErrors: initialForm.resetOptions.keepErrors || false,
          }
        : {
            keepDirty: false,
            keepTouched: false,
            keepErrors: false,
          },
    };
    for (const name in initialForm.fields) {
      if (initialForm.fields.hasOwnProperty(name)) {
        state.fields[name] = {
          value: initialForm.fields[name].value,
          error: initialForm.fields[name].error || null,
          validators: initialForm.fields[name].validators || {},
          isDirty: false,
          isTouched: false,
        };
      }
    }
    return state;
  });

  const register = (name: string) => {
    const props: any = {
      onChange: (e: any) =>
        handleChange(
          name,
          e.target.type === "checkbox" ? e.target.checked : e.target.value
        ),
      onBlur: () => handleBlur(name),
      error: getError(name),
      value: getValue(name),
      name: name,
    };

    return props;
  };

  const setError = (name: string, error: string) => {
    setFormState((prev: FormState) => ({
      ...prev,
      fields: {
        ...prev.fields,
        [name]: {
          ...prev.fields[name],
          error: error,
        },
      },
    }));
  };

  const setValue = (name: string, value: Value) => {
    setFormState((prev: FormState) => ({
      ...prev,
      fields: {
        ...prev.fields,
        [name]: {
          ...prev.fields[name],
          value: value,
          isDirty: true,
        },
      },
    }));
  };

  const getFormValues = () => {
    const values: Values = {};

    Object.keys(formState.fields).forEach((field) => {
      values[field] = formState.fields[field].value;
    });

    return values;
  };

  const getValue = (name: string) => {
    return formState.fields[name]?.value;
  };

  const getFormErrors = () => {
    const errors: Errors = {};

    Object.keys(formState.fields).forEach((field) => {
      errors[field] = formState.fields[field].error;
    });

    return errors;
  };

  const getError = (name: string) => {
    return formState.fields[name]?.error;
  };

  const validate = async (name: string, value: Value) => {
    let error: Error = null;

    const validators = formState.fields[name].validators;

    for (const validator of Object.keys(validators)) {
      error = await validators[validator](value);
      if (error) {
        break;
      }
    }

    setFormState((prev: FormState) => ({
      ...prev,
      fields: {
        ...prev.fields,
        [name]: {
          ...prev.fields[name],
          error: error,
        },
      },
    }));

    return error;
  };

  const handleBlur = (name: string) => {
    setFormState((prev: FormState) => ({
      ...prev,
      fields: {
        ...prev.fields,
        [name]: {
          ...prev.fields[name],
          isTouched: true,
        },
      },
    }));

    if (formState.validateOn === "blur" || formState.validateOn === "all") {
      validate(name, formState.fields[name].value);
    }
  };

  const handleChange = (name: string, value: Value) => {
    setFormState((prev: FormState) => ({
      ...prev,
      fields: {
        ...prev.fields,
        [name]: {
          ...prev.fields[name],
          value: value,
          isDirty: true,
        },
      },
    }));

    if (formState.validateOn === "change" || formState.validateOn === "all") {
      validate(name, formState.fields[name].value);
    }
  };

  const validateForm = async () => {
    let hasErrors = false;

    for (const name in formState.fields) {
      const field = formState.fields[name];

      if (field.validators) {
        const error = await validate(name, field.value);

        if (error) {
          hasErrors = true;
        }
      }
    }

    return hasErrors;
  };

  const handleReset = () => {
    setFormState((prev: FormState) => {
      const state: any = {
        fields: {},
        validateOn: prev.validateOn,
        resetOptions: { ...prev.resetOptions },
      };
      for (const fieldName in prev.fields) {
        if (prev.fields.hasOwnProperty(fieldName)) {
          state.fields[fieldName] = {
            ...prev.fields[fieldName],
            value: initialForm.fields?.[fieldName]?.value,
            error: formState.resetOptions.keepErrors
              ? prev.fields[fieldName].error
              : null,
            isDirty: formState.resetOptions.keepDirty
              ? prev.fields[fieldName].isDirty
              : null,
            isTouched: formState.resetOptions.keepTouched
              ? prev.fields[fieldName].isTouched
              : null,
          };
        }
      }
      return state;
    });
  };

  const handleSubmit = async (
    e: any,
    onSubmit: (values: Values) => void,
    onError?: (values: Values) => void
  ) => {
    e.preventDefault();

    const hasErrors = await validateForm();

    const values = getFormValues();

    if (hasErrors) {
      if (onError) {
        onError(values);
      }
    } else {
      onSubmit(values);
    }
  };

  return {
    formState,
    register,
    setValue,
    setError,
    getFormValues,
    getValue,
    getFormErrors,
    getError,
    validate,
    handleChange,
    handleBlur,
    validateForm,
    handleReset,
    handleSubmit,
  };
};

export default useForm;
