import React from "react";
import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Box from "./Box";

test("Correct render", () => {
  const { getByText } = render(<Box>Hello, world!</Box>);

  const element = getByText("Hello, world!");

  expect(element).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(<Box onClick={mock}>Hello, world!</Box>);

  const element = getByTestId("prismane-box");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(
    <Box className="custom-class">Hello, world!</Box>
  );

  const element = getByTestId("prismane-box");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Box data-testprop="test-prop" />);

  const element = getByTestId("prismane-box");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
