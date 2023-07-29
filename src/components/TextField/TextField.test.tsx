import { render, screen, fireEvent } from "@testing-library/react";
// Component
import TextField from "./TextField";

test("Correctly renders the TextField component with label and error message", () => {
  const label = "Name";
  const error = "Field cannot be empty";

  render(<TextField label={label} error={error} />);

  const labelElement = screen.getByText(label);
  const errorElement = screen.getByText(error);
  const textFieldElement = screen.getByTestId("prismane-text-field");

  expect(labelElement).toBeInTheDocument();
  expect(errorElement).toBeInTheDocument();
  expect(textFieldElement).toBeInTheDocument();
});

test("Correctly applies additional props to the TextField component", () => {
  const dataTestId = "text-field-input";
  render(<TextField label="Name" data-testid={dataTestId} />);

  const textFieldElement = screen.getByTestId(dataTestId);
  expect(textFieldElement).toBeInTheDocument();
});

test("Correctly renders the TextField component with a prefix and suffix", () => {
  const prefix = "$";
  const suffix = "USD";
  render(<TextField label="Price" prefix={prefix} suffix={suffix} />);

  const prefixElement = screen.getByText(prefix);
  const suffixElement = screen.getByText(suffix);
  expect(prefixElement).toBeInTheDocument();
  expect(suffixElement).toBeInTheDocument();
});
