import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
// Component
import NativeSelectField from "./NativeSelectField";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

test("Correctly renders the NativeSelectField with label and error message", () => {
  const label = "Select an option";

  const error = "Please select an option";

  render(<NativeSelectField label={label} error={error} options={options} />);

  const selectElement = screen.getByLabelText(label);

  const errorElement = screen.getByText(error);

  expect(selectElement).toBeInTheDocument();

  expect(selectElement.tagName.toLowerCase()).toBe("select");

  expect(errorElement).toBeInTheDocument();
});

test("Correctly applies additional props to the NativeSelectField", () => {
  const label = "Select an option";

  const dataTestId = "select-input";

  render(
    <NativeSelectField
      label={label}
      options={options}
      data-testid={dataTestId}
    />
  );

  const selectElement = screen.getByTestId(dataTestId);

  expect(selectElement).toBeInTheDocument();
});

test("Correctly invokes onChange when the value of NativeSelectField changes", () => {
  const label = "Select an option";

  const handleChange = vi.fn();

  render(
    <NativeSelectField
      label={label}
      options={options}
      onChange={handleChange}
    />
  );

  const selectElement = screen.getByLabelText(label);

  const selectedValue = "option2";

  fireEvent.change(selectElement, { target: { value: selectedValue } });

  expect(handleChange).toHaveBeenCalledTimes(1);
});

test("Correctly sets the readOnly attribute of NativeSelectField", () => {
  const label = "Select an option";

  const readOnly = true;

  render(
    <NativeSelectField label={label} options={options} readOnly={readOnly} />
  );

  const selectElement = screen.getByLabelText(label);

  expect(selectElement).toHaveAttribute("readonly");
});

test("Correctly renders the options in the NativeSelectField", () => {
  const label = "Select an option";

  render(<NativeSelectField label={label} options={options} />);

  const selectElement = screen.getByLabelText(label);

  expect(selectElement.options).toHaveLength(options.length);

  for (let i = 0; i < options.length; i++) {
    expect(selectElement.options[i].value).toBe(options[i].value);
    expect(selectElement.options[i].textContent).toBe(options[i].label);
  }
});
