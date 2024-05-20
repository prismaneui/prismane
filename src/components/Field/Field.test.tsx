import React from "react";
import { render, fireEvent } from "@testing-library/react";
// Component
import Field from "./Field";

test("Correct render with placeholder", () => {
  const placeholderText = "Enter your name";

  const { getByPlaceholderText } = render(
    <Field placeholder={placeholderText} />
  );

  const field = getByPlaceholderText(placeholderText);

  expect(field).toBeInTheDocument();
});

test("Correct render with icon", () => {
  const icon = <i className="fas fa-user" />;

  const { container } = render(<Field icon={icon} />);

  const iconElement = container.querySelector(".PrismaneField-icon");

  expect(iconElement).toBeInTheDocument();
});

test("Correct update of field value", () => {
  const { getByPlaceholderText } = render(<Field placeholder="Enter text" />);

  const field = getByPlaceholderText("Enter text");

  fireEvent.change(field, { target: { value: "Hello, world!" } });

  expect(field.value).toBe("Hello, world!");
});

test("Correct render with validating state", () => {
  const { getByTestId } = render(<Field validating />);

  const spinnerElement = getByTestId("prismane-spinner");

  expect(spinnerElement).toBeInTheDocument();
});

test("Correct render of error message", () => {
  const errorMessage = "This field is required";

  const { getByTestId } = render(<Field.Error>{errorMessage}</Field.Error>);

  const errorElement = getByTestId("prismane-field-error");

  expect(errorElement).toBeInTheDocument();
});

test("Correct render of label", () => {
  const label = "Label";

  const { getByTestId } = render(<Field.Label>{label}</Field.Label>);

  const labelElement = getByTestId("prismane-field-label");

  expect(labelElement).toBeInTheDocument();
});

test("Correct render of wrapper", () => {
  const { getByTestId } = render(<Field.Wrapper>lorem</Field.Wrapper>);

  const wrapperElement = getByTestId("prismane-field-wrapper");

  expect(wrapperElement).toBeInTheDocument();
});

test("Correct variant render", () => {
  const variant = "outlined";

  const { container } = render(<Field variant={variant} />);

  const field = container.querySelector(".PrismaneField-root");

  expect(field).toHaveClass(`PrismaneField-root-${variant}`);
});
