import React from "react";
import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import CloseButton from "./CloseButton";

test("Correct render", () => {
  const { getByText } = render(<CloseButton>Hello, world!</CloseButton>);

  const button = getByText("Hello, world!");

  expect(button).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(
    <CloseButton onClick={mock}>Hello, world!</CloseButton>
  );

  const button = getByTestId("prismane-action-button");

  fireEvent.click(button);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct disabled state", () => {
  const { getByTestId } = render(
    <CloseButton disabled>Hello, world!</CloseButton>
  );

  const button = getByTestId("prismane-action-button");

  expect(button).toBeDisabled();
});
