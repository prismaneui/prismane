import React from "react";
import { vi } from "vitest";
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

  const radioElement: any = screen.getByLabelText("Yes");

  expect(radioElement.value).toBe("yes");
});

test("Correctly invokes onChange when the value of Radio component changes", () => {
  const handleChange = vi.fn();

  render(<Radio label="Yes" value="yes" onChange={handleChange} />);

  const radioElement = screen.getByLabelText("Yes");

  fireEvent.click(radioElement);

  expect(handleChange).toHaveBeenCalledTimes(1);
});
