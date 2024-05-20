import React from "react";
import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Icon from "./Icon";

test("Correct render", () => {
  const { getByText } = render(<Icon>Hello, world!</Icon>);

  const element = getByText("Hello, world!");

  expect(element).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(<Icon onClick={mock}>Hello, world!</Icon>);

  const element = getByTestId("prismane-icon");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(
    <Icon className="custom-class">Hello, world!</Icon>
  );

  const element = getByTestId("prismane-icon");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Icon data-testprop="test-prop" />);

  const element = getByTestId("prismane-icon");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
