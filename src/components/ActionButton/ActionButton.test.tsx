import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import ActionButton from "./ActionButton";

test("Correct render", () => {
  const { getByText } = render(<ActionButton>Hello, world!</ActionButton>);

  const button = getByText("Hello, world!");

  expect(button).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(
    <ActionButton onClick={mock}>Hello, world!</ActionButton>
  );

  const button = getByTestId("prismane-action-button");

  fireEvent.click(button);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct disabled state", () => {
  const { getByTestId } = render(
    <ActionButton disabled>Hello, world!</ActionButton>
  );

  const button = getByTestId("prismane-action-button");

  expect(button).toBeDisabled();
});
