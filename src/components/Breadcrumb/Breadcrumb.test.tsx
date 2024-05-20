import React from "react";
import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Breadcrumb from "./Breadcrumb";

test("Correct render", () => {
  const { getByText } = render(<Breadcrumb>Hello, world!</Breadcrumb>);

  const element = getByText("Hello, world!");

  expect(element).toBeInTheDocument();
});

test("Correct render with inner components", () => {
  const { getByTestId } = render(
    <Breadcrumb>
      <Breadcrumb.Item>lorem</Breadcrumb.Item>
      <Breadcrumb.Separator />
    </Breadcrumb>
  );

  const element = getByTestId("prismane-breadcrumb");

  const item = getByTestId("prismane-breadcrumb-item");

  const separator = getByTestId("prismane-breadcrumb-separator");

  expect(element).toBeInTheDocument();

  expect(item).toBeInTheDocument();

  expect(separator).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(
    <Breadcrumb onClick={mock}>Hello, world!</Breadcrumb>
  );

  const element = getByTestId("prismane-breadcrumb");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(
    <Breadcrumb className="custom-class">Hello, world!</Breadcrumb>
  );

  const element = getByTestId("prismane-breadcrumb");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Breadcrumb data-testprop="test-prop" />);

  const element = getByTestId("prismane-breadcrumb");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
