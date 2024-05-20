import React from "react";
import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Container from "./Container";

test("Correct render", () => {
  const { getByText } = render(<Container>Hello, world!</Container>);

  const element = getByText("Hello, world!");

  expect(element).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(
    <Container onClick={mock}>Hello, world!</Container>
  );

  const element = getByTestId("prismane-container");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(
    <Container className="custom-class">Hello, world!</Container>
  );

  const element = getByTestId("prismane-container");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Container data-testprop="test-prop" />);

  const element = getByTestId("prismane-container");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
