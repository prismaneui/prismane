import React from "react";
import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Collapse from "./Collapse";

test("Correct render", () => {
  const { getByText } = render(<Collapse>Hello, world!</Collapse>);

  const element = getByText("Hello, world!");

  expect(element).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(
    <Collapse onClick={mock}>Hello, world!</Collapse>
  );

  const element = getByTestId("prismane-collapse");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(
    <Collapse className="custom-class">Hello, world!</Collapse>
  );

  const element = getByTestId("prismane-collapse");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Collapse data-testprop="test-prop" />);

  const element = getByTestId("prismane-collapse");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
