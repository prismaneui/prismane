import React from "react";
import { vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
// Component
import Checkbox from "./Checkbox";

test("Correctly renders the Checkbox component with label and error message", () => {
  const label = "Option 1";

  const error = "This field is required";

  render(<Checkbox label={label} error={error} />);

  const labelElement = screen.getByText(label);
  const errorElement = screen.getByText(error);
  const checkboxElement = screen.getByTestId("prismane-checkbox");

  expect(labelElement).toBeInTheDocument();
  expect(errorElement).toBeInTheDocument();
  expect(checkboxElement).toBeInTheDocument();
});

test("Correctly renders the active Checkbox component", () => {
  render(<Checkbox label="Option 1" checked />);

  const checkboxElement = screen.getByTestId("prismane-checkbox");

  expect(checkboxElement).toBeInTheDocument();
});

test("Correctly renders the indeterminate Checkbox component", () => {
  render(<Checkbox label="Option 1" indeterminate />);

  const checkboxElement = screen.getByTestId("prismane-checkbox");

  expect(checkboxElement).not.toBeChecked();
});

test("Correctly invokes onChange when the value of Checkbox component changes", () => {
  const handleChange = vi.fn();

  render(<Checkbox label="Option 1" onChange={handleChange} />);

  const checkboxElement = screen.getByTestId("prismane-checkbox");

  fireEvent.click(checkboxElement);

  expect(handleChange).toHaveBeenCalledTimes(1);
});

test("Correctly applies additional props to the Checkbox component", () => {
  const dataTestId = "checkbox-input";

  render(<Checkbox label="Option 1" data-testid={dataTestId} />);

  const checkboxElement = screen.getByTestId(dataTestId);
  expect(checkboxElement).toBeInTheDocument();
});
