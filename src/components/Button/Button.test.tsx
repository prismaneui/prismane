import React from "react";
import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Button from "./Button";

test("Correct render", () => {
  const { getByText } = render(<Button>Hello, world!</Button>);
  const button = getByText("Hello, world!");
  expect(button).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();
  const { getByTestId } = render(<Button onClick={mock}>Hello, world!</Button>);
  const button = getByTestId("prismane-button");

  fireEvent.click(button);
  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct disabled state", () => {
  const { getByTestId } = render(<Button disabled>Hello, world!</Button>);
  const button = getByTestId("prismane-button");
  expect(button).toBeDisabled();
});
