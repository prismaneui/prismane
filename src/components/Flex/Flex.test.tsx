import React from "react";
import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Flex from "./Flex";

test("Correct render", () => {
  const { getByText } = render(<Flex>Hello, world!</Flex>);

  const element = getByText("Hello, world!");

  expect(element).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(<Flex onClick={mock}>Hello, world!</Flex>);

  const element = getByTestId("prismane-flex");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(
    <Flex className="custom-class">Hello, world!</Flex>
  );

  const element = getByTestId("prismane-flex");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Flex data-testprop="test-prop" />);

  const element = getByTestId("prismane-flex");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
