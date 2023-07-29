import { render, screen, fireEvent } from "@testing-library/react";
// Component
import Switch from "./Switch";

test("Correctly renders the Switch component with label and error message", () => {
  const label = "Option 1";

  const error = "This field is required";

  render(<Switch label={label} error={error} />);

  const labelElement = screen.getByText(label);
  const errorElement = screen.getByText(error);
  const checkboxElement = screen.getByTestId("prismane-switch");

  expect(labelElement).toBeInTheDocument();
  expect(errorElement).toBeInTheDocument();
  expect(checkboxElement).toBeInTheDocument();
});

test("Correctly renders the active Switch component", () => {
  render(<Switch label="Option 1" checked />);

  const checkboxElement = screen.getByTestId("prismane-switch");

  expect(checkboxElement).toBeInTheDocument();
});

test("Correctly renders the indeterminate Switch component", () => {
  render(<Switch label="Option 1" indeterminate />);

  const checkboxElement = screen.getByTestId("prismane-switch");

  expect(checkboxElement).not.toBeChecked();
});

test("Correctly invokes onChange when the value of Switch component changes", () => {
  const handleChange = vi.fn();

  render(<Switch label="Option 1" onChange={handleChange} />);

  const checkboxElement = screen.getByTestId("prismane-switch");

  fireEvent.click(checkboxElement);

  expect(handleChange).toHaveBeenCalledTimes(1);
});

test("Correctly applies additional props to the Switch component", () => {
  const dataTestId = "checkbox-input";

  render(<Switch label="Option 1" data-testid={dataTestId} />);

  const checkboxElement = screen.getByTestId(dataTestId);
  expect(checkboxElement).toBeInTheDocument();
});
