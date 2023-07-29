import { render, screen, fireEvent } from "@testing-library/react";
// Component
import NativeDateField from "./NativeDateField";

test("Correctly renders the NativeDateField with label and error message", () => {
  const label = "Date of Birth";

  const error = "Invalid date format";

  render(<NativeDateField label={label} error={error} />);

  const inputElement = screen.getByLabelText(label);

  const errorElement = screen.getByText(error);

  expect(inputElement).toBeInTheDocument();

  expect(inputElement).toHaveAttribute("type", "date");

  expect(errorElement).toBeInTheDocument();
});

test("Correctly applies additional props to the NativeDateField", () => {
  const label = "Date of Birth";

  const dataTestId = "birthdate-input";

  render(<NativeDateField label={label} data-testid={dataTestId} />);

  const inputElement = screen.getByTestId(dataTestId);

  expect(inputElement).toBeInTheDocument();
});

test("Correctly invokes onChange when the value of NativeDateField changes", () => {
  const label = "Date of Birth";

  const handleChange = vi.fn();

  render(<NativeDateField label={label} onChange={handleChange} />);

  const inputElement = screen.getByLabelText(label);

  const dateValue = "2023-07-15";

  fireEvent.change(inputElement, { target: { value: dateValue } });

  expect(handleChange).toHaveBeenCalledTimes(1);
});
