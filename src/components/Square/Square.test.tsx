import React from "react";
import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Square from "./Square";

test("Correct render", () => {
  const { getByTestId } = render(<Square />);

  const element = getByTestId("prismane-square");

  expect(element).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(<Square onClick={mock} />);

  const element = getByTestId("prismane-square");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(<Square className="custom-class" />);

  const element = getByTestId("prismane-square");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Square data-testprop="test-prop" />);

  const element = getByTestId("prismane-square");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
