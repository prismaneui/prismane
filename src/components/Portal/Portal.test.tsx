import React from "react";
import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Portal from "./Portal";

test("Correct render", () => {
  const { getByText } = render(<Portal>Hello, world!</Portal>);

  const element = getByText("Hello, world!");

  expect(element).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(<Portal onClick={mock}>Hello, world!</Portal>);

  const element = getByTestId("prismane-portal");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(
    <Portal className="custom-class">Hello, world!</Portal>
  );

  const element = getByTestId("prismane-portal");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Portal data-testprop="test-prop" />);

  const element = getByTestId("prismane-portal");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
