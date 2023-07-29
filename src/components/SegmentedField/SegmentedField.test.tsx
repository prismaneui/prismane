import { render, screen, fireEvent } from "@testing-library/react";
// Component
import SegmentedField from "./SegmentedField";

const options = [
  { element: "Option 1", value: "option1" },
  { element: "Option 2", value: "option2" },
  { element: "Option 3", value: "option3" },
];

test("Correctly renders the SegmentedField component with label and error message", () => {
  const label = "Select an option";
  const error = "Please select an option";

  render(<SegmentedField label={label} error={error} options={options} />);

  const labelElement = screen.getByText(label);
  const errorElement = screen.getByText(error);
  const optionElements = options.map((option) =>
    screen.getByText(option.element)
  );

  expect(labelElement).toBeInTheDocument();
  expect(errorElement).toBeInTheDocument();
  optionElements.forEach((element) => expect(element).toBeInTheDocument());
});

test("Correctly invokes onChange when an option is selected", () => {
  const handleChange = vi.fn();
  render(
    <SegmentedField
      label="Select an option"
      options={options}
      onChange={handleChange}
    />
  );

  const optionElement = screen.getByText(options[1].element);
  fireEvent.click(optionElement);

  expect(handleChange).toHaveBeenCalledTimes(1);
});

test("Correctly applies additional props to the SegmentedField component", () => {
  const dataTestId = "segmented-field-input";
  render(
    <SegmentedField
      label="Select an option"
      options={options}
      data-testid={dataTestId}
    />
  );

  const segmentedFieldElement = screen.getByTestId(dataTestId);
  expect(segmentedFieldElement).toBeInTheDocument();
});

test("Correctly renders the SegmentedField component with default selected option", () => {
  const defaultValue = "option2";
  render(
    <SegmentedField
      label="Select an option"
      options={options}
      defaultValue={defaultValue}
    />
  );

  const selectedOptionElement = screen.getByText(options[1].element);
  expect(selectedOptionElement).toBeInTheDocument();
});
