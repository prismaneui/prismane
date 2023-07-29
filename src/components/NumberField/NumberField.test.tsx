import { render, screen, fireEvent } from "@testing-library/react";
// Component
import NumberField from "./NumberField";

test("Correctly renders the NumberField with label and error message", () => {
  const label = "Enter a number";

  const error = "Invalid input";

  render(<NumberField label={label} error={error} />);

  const labelElement = screen.getByText(label);
  const errorElement = screen.getByText(error);
  const inputElement = screen.getByRole("textbox");

  expect(labelElement).toBeInTheDocument();
  expect(errorElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
});

test("Correctly applies additional props to the NumberField", () => {
  const dataTestId = "number-input";

  render(<NumberField data-testid={dataTestId} />);

  const inputElement = screen.getByTestId(dataTestId);

  expect(inputElement).toBeInTheDocument();
});

test("Correctly invokes onChange when the value of NumberField changes", () => {
  const handleChange = vi.fn();

  render(<NumberField onChange={handleChange} />);

  const inputElement = screen.getByRole("textbox");
  const newValue = "42";
  fireEvent.change(inputElement, { target: { value: newValue } });

  expect(handleChange).toHaveBeenCalledTimes(1);
});

test("Correctly increments and decrements the value when the arrow icons are clicked", () => {
  let value = 5;

  render(
    <NumberField
      value={value}
      onChange={(e) => {
        value = e.target.value;
      }}
    />
  );

  const inputElement = screen.getByRole("textbox");
  const addon = screen.getByTestId("prismane-field-addon");
  const caretUpElement = addon.children[0];
  const caretDownElement = addon.children[1];

  fireEvent.click(caretUpElement);
  expect(inputElement.value).toBe("6");

  fireEvent.click(caretDownElement);
  expect(inputElement.value).toBe("4");
});
