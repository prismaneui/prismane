import React from "react";
import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Key from "./Key";

test("Correct render", () => {
  const { getByText } = render(<Key>Hello, world!</Key>);

  const element = getByText("Hello, world!");

  expect(element).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(<Key onClick={mock}>Hello, world!</Key>);

  const element = getByTestId("prismane-key");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(
    <Key className="custom-class">Hello, world!</Key>
  );

  const element = getByTestId("prismane-key");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Key data-testprop="test-prop" />);

  const element = getByTestId("prismane-key");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
