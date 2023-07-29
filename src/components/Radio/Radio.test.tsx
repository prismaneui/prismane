import { render, screen, fireEvent } from "@testing-library/react";
// Component
import Radio from "./Radio";

test("Correctly renders the Radio component with label and error message", () => {
  const label = "Yes";
  const error = "This field is required";

  render(<Radio label={label} error={error} />);

  const labelElement = screen.getByText(label);
  const errorElement = screen.getByText(error);
  const radioElement = screen.getByLabelText(label);

  expect(labelElement).toBeInTheDocument();
  expect(errorElement).toBeInTheDocument();
  expect(radioElement).toBeInTheDocument();
  expect(radioElement).not.toBeDisabled();
});

test("Correctly renders the active Radio component", () => {
  render(<Radio label="Yes" value="yes" />);

  const radioElement = screen.getByLabelText("Yes");
  expect(radioElement.value).toBe("yes");
});

test("Correctly invokes onChange when the value of Radio component changes", () => {
  const handleChange = vi.fn();

  render(<Radio label="Yes" value="yes" onChange={handleChange} />);

  const radioElement = screen.getByLabelText("Yes");
  fireEvent.click(radioElement);

  expect(handleChange).toHaveBeenCalledTimes(1);
});

test("Correctly sets the name attribute for the Radio component", () => {
  render(
    <Radio.Group name="answer">
      <Radio value="yes" label="Yes" />
      <Radio value="no" label="No" />
    </Radio.Group>
  );

  const radioElements = screen.getAllByRole("radio");
  radioElements.forEach((radioElement) => {
    expect(radioElement).toHaveAttribute("name", "answer");
  });
});

test("Correctly applies additional props to the Radio component", () => {
  const dataTestId = "radio-input";

  render(<Radio label="Yes" data-testid={dataTestId} />);

  const radioElement = screen.getByTestId(dataTestId);
  expect(radioElement).toBeInTheDocument();
});
