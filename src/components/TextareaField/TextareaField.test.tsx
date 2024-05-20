import React from "react";
import { vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
// Component
import TextareaField from "./TextareaField";

test("Correctly renders the TextareaField component with label and error message", () => {
  const label = "Your Message";
  const error = "Field cannot be empty";

  render(<TextareaField label={label} error={error} />);

  const labelElement = screen.getByText(label);
  const errorElement = screen.getByText(error);
  const textareaElement = screen.getByRole("textbox");

  expect(labelElement).toBeInTheDocument();
  expect(errorElement).toBeInTheDocument();
  expect(textareaElement).toBeInTheDocument();
});

test("Correctly invokes onChange when the content of the textarea is changed", () => {
  const handleChange = vi.fn();
  render(<TextareaField label="Your Message" onChange={handleChange} />);

  const textareaElement = screen.getByRole("textbox");
  fireEvent.change(textareaElement, { target: { value: "Hello, world!" } });

  expect(handleChange).toHaveBeenCalledTimes(1);
});

test("Correctly applies additional props to the TextareaField component", () => {
  const dataTestId = "textarea-field-input";
  render(<TextareaField label="Your Message" data-testid={dataTestId} />);

  const textareaElement = screen.getByTestId(dataTestId);
  expect(textareaElement).toBeInTheDocument();
});
