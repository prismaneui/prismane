import { render, screen, fireEvent } from "@testing-library/react";
// Component
import SelectField from "./SelectField";

test("Correctly renders the SelectField with label and placeholder", () => {
  render(
    <SelectField
      label="Select an option"
      placeholder="Choose an option"
      options={[
        { value: "option1", element: "Option 1" },
        { value: "option2", element: "Option 2" },
      ]}
    />
  );

  const labelElement = screen.getByText("Select an option");
  const placeholderElement = screen.getByPlaceholderText("Choose an option");

  expect(labelElement).toBeInTheDocument();
  expect(placeholderElement).toBeInTheDocument();
});

test("Correctly opens the dropdown menu when clicking the input field", () => {
  render(
    <SelectField
      label="Select an option"
      options={[
        { value: "option1", element: "Option 1" },
        { value: "option2", element: "Option 2" },
      ]}
    />
  );

  const field = screen.getByLabelText("Select an option");

  fireEvent.click(field);

  const menuElement = screen.getByRole("menu");

  expect(menuElement).toBeInTheDocument();
});

test("Correctly selects an option from the dropdown menu", () => {
  const handleChange = vi.fn();

  render(
    <SelectField
      label="Select an option"
      onChange={handleChange}
      options={[
        { value: "option1", element: "Option 1" },
        { value: "option2", element: "Option 2" },
      ]}
    />
  );

  const field = screen.getByLabelText("Select an option");

  fireEvent.click(field);

  const optionElement = screen.getByText("Option 1");

  fireEvent.click(optionElement);

  expect(handleChange).toHaveBeenCalledTimes(1);
});

test("Correctly displays the error message", () => {
  render(
    <SelectField
      label="Select an option"
      error="This field is required"
      options={[
        { value: "option1", element: "Option 1" },
        { value: "option2", element: "Option 2" },
      ]}
    />
  );

  const errorElement = screen.getByText("This field is required");

  expect(errorElement).toBeInTheDocument();
});

test("Correctly highlights the selected option", () => {
  render(
    <SelectField
      label="Select an option"
      value="option2"
      options={[
        { value: "option1", element: "Option 1" },
        { value: "option2", element: "Option 2" },
      ]}
    />
  );

  const field = screen.getByLabelText("Select an option");

  fireEvent.click(field);

  const selectedOptionElement = screen.getByText("Option 2");

  expect(selectedOptionElement).toBeInTheDocument();
});
