import React from "react";
import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Card from "./Card";

test("Correct render", () => {
  const { getByText } = render(<Card>Hello, world!</Card>);

  const element = getByText("Hello, world!");

  expect(element).toBeInTheDocument();
});

test("Correct render with inner components", () => {
  const { getByTestId } = render(
    <Card>
      <Card.Header>lorem</Card.Header>
      <Card.Footer>lorem</Card.Footer>
    </Card>
  );

  const element = getByTestId("prismane-card");

  const header = getByTestId("prismane-card-header");

  const footer = getByTestId("prismane-card-footer");

  expect(element).toBeInTheDocument();

  expect(header).toBeInTheDocument();

  expect(footer).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(<Card onClick={mock}>Hello, world!</Card>);

  const element = getByTestId("prismane-card");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(
    <Card className="custom-class">Hello, world!</Card>
  );

  const element = getByTestId("prismane-card");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Card data-testprop="test-prop" />);

  const element = getByTestId("prismane-card");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
