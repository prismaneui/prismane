import React from "react";
import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Gradient from "./Gradient";

test("Correct render", () => {
  const { getByText } = render(<Gradient>Hello, world!</Gradient>);

  const element = getByText("Hello, world!");

  expect(element).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(
    <Gradient onClick={mock}>Hello, world!</Gradient>
  );

  const element = getByTestId("prismane-gradient");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(
    <Gradient className="custom-class">Hello, world!</Gradient>
  );

  const element = getByTestId("prismane-gradient");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Gradient data-testprop="test-prop" />);

  const element = getByTestId("prismane-gradient");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
