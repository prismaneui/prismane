import React from "react";
import { render, screen } from "@testing-library/react";
// Component
import AutocompleteField from "./AutocompleteField";

test("Correctly renders the AutocompleteField with label and placeholder", () => {
  const options = [
    { value: "apple", element: "Apple" },
    { value: "banana", element: "Banana" },
    { value: "orange", element: "Orange" },
  ];

  render(
    <AutocompleteField
      label="Select a fruit"
      placeholder="Choose a fruit"
      options={options}
    />
  );

  const labelElement = screen.getByText("Select a fruit");
  const placeholderElement = screen.getByPlaceholderText("Choose a fruit");

  expect(labelElement).toBeInTheDocument();
  expect(placeholderElement).toBeInTheDocument();
});

test("Correctly displays the error message", () => {
  const options = [
    { value: "apple", element: "Apple" },
    { value: "banana", element: "Banana" },
    { value: "orange", element: "Orange" },
  ];

  render(
    <AutocompleteField
      label="Select a fruit"
      error="This field is required"
      options={options}
    />
  );

  const errorElement = screen.getByText("This field is required");
  expect(errorElement).toBeInTheDocument();
});
