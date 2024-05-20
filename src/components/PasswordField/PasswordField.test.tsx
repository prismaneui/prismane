import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
// Component
import PasswordField from "./PasswordField";

test("Correctly renders the PasswordField with label and error message", () => {
  const label = "Enter Password";

  const error = "Password is too short";

  render(<PasswordField label={label} error={error} />);

  const labelElement = screen.getByText(label);
  const errorElement = screen.getByText(error);
  const inputElement = screen.getByTestId("prismane-field");

  expect(labelElement).toBeInTheDocument();
  expect(errorElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
});

test("Correctly toggles visibility when the eye icon is clicked", () => {
  render(<PasswordField />);

  const inputElement = screen.getByTestId("prismane-field");
  const eyeIconElement = screen.getByTestId("prismane-field-addon").children[0];

  fireEvent.click(eyeIconElement);
  expect(inputElement).toHaveAttribute("type", "text");

  fireEvent.click(eyeIconElement);
  expect(inputElement).toHaveAttribute("type", "password");
});

test("Correctly applies additional props to the PasswordField", () => {
  const dataTestId = "password-input";

  render(<PasswordField data-testid={dataTestId} />);

  const inputElement = screen.getByTestId(dataTestId);
  expect(inputElement).toBeInTheDocument();
});

test("Correctly invokes onChange when the value of PasswordField changes", () => {
  const handleChange = vi.fn();

  render(<PasswordField onChange={handleChange} />);

  const inputElement = screen.getByTestId("prismane-field");
  const newValue = "newPassword";
  fireEvent.change(inputElement, { target: { value: newValue } });

  expect(handleChange).toHaveBeenCalledTimes(1);
});
