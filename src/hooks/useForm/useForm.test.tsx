import React from "react";
import { test, vi } from "vitest";
import { renderHook, act } from "@testing-library/react-hooks";
// Hook
import useForm, { InitialFormState } from "./useForm";

test("Correct initial values", () => {
  const initialForm: InitialFormState = {
    fields: {
      name: {
        value: "",
        validators: {
          required: (v) => (v ? null : "Name is required"),
        },
      },
      email: {
        value: "",
        validators: {
          required: (v) => (v ? null : "Email is required"),
          email: (v) =>
            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(v)
              ? null
              : "Invalid email address",
        },
      },
    },
    validateOn: "change",
    resetOptions: {
      keepDirty: true,
      keepTouched: true,
      keepErrors: true,
    },
  };

  const { result } = renderHook(() => useForm(initialForm));

  const formState = result.current.formState;

  expect(formState.fields.name.value).toBe("");
  expect(formState.fields.name.error).toBe(null);
  expect(formState.fields.email.value).toBe("");
  expect(formState.fields.email.error).toBe(null);
  expect(formState.validateOn).toBe("change");
  expect(formState.resetOptions.keepDirty).toBe(true);
  expect(formState.resetOptions.keepTouched).toBe(true);
  expect(formState.resetOptions.keepErrors).toBe(true);
});

test("Correct value update on onChange event", () => {
  const initialForm: InitialFormState = {
    fields: {
      name: {
        value: "",
        validators: {
          required: (v) => (v ? null : "Name is required"),
        },
      },
    },
  };

  const { result } = renderHook(() => useForm(initialForm));

  const nameField = result.current.register("name");

  act(() => {
    nameField.onChange({ target: { value: "John Doe" } });
  });

  expect(result.current.getValue("name")).toBe("John Doe");
});

test("Correct form submission", async () => {
  const onSubmitMock = vi.fn();

  const initialForm: InitialFormState = {
    fields: {
      name: {
        value: "",
        validators: {
          required: (v) => (v ? null : "Name is required"),
        },
      },
      email: {
        value: "",
        validators: {
          required: (v) => (v ? null : "Email is required"),
          email: (v) =>
            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(v)
              ? null
              : "Invalid email address",
        },
      },
    },
    validateOn: "change",
  };

  const { result } = renderHook(() => useForm(initialForm));

  const nameField = result.current.register("name");
  const emailField = result.current.register("email");

  act(() => {
    nameField.onChange({ target: { value: "John Doe" } });
    emailField.onChange({ target: { value: "john.doe@example.com" } });
  });

  await act(async () => {
    result.current.handleSubmit({ preventDefault: () => {} }, onSubmitMock);
  });

  expect(onSubmitMock).toHaveBeenCalledWith({
    name: "John Doe",
    email: "john.doe@example.com",
  });
});
