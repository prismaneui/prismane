import React from "react";
import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Center from "./Center";

test("Correct render", () => {
  const { getByText } = render(<Center>Hello, world!</Center>);

  const element = getByText("Hello, world!");

  expect(element).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(<Center onClick={mock}>Hello, world!</Center>);

  const element = getByTestId("prismane-center");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(
    <Center className="custom-class">Hello, world!</Center>
  );

  const element = getByTestId("prismane-center");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Center data-testprop="test-prop" />);

  const element = getByTestId("prismane-center");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
