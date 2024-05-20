import React from "react";
import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Circle from "./Circle";

test("Correct render", () => {
  const { getByText } = render(<Circle>Hello, world!</Circle>);

  const element = getByText("Hello, world!");

  expect(element).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(<Circle onClick={mock}>Hello, world!</Circle>);

  const element = getByTestId("prismane-circle");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(
    <Circle className="custom-class">Hello, world!</Circle>
  );

  const element = getByTestId("prismane-circle");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Circle data-testprop="test-prop" />);

  const element = getByTestId("prismane-circle");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
