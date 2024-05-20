import React from "react";
import { render, screen } from "@testing-library/react";
// Component
import ColorField from "./ColorField";

test("Correctly renders the ColorField with label and placeholder", () => {
  render(<ColorField label="Select a fruit" placeholder="Choose a fruit" />);

  const labelElement = screen.getByText("Select a fruit");
  const placeholderElement = screen.getByPlaceholderText("Choose a fruit");

  expect(labelElement).toBeInTheDocument();
  expect(placeholderElement).toBeInTheDocument();
});

test("Correctly displays the error message", () => {
  render(<ColorField label="Select a fruit" error="This field is required" />);

  const errorElement = screen.getByText("This field is required");
  expect(errorElement).toBeInTheDocument();
});
