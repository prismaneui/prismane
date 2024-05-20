import React from "react";
import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Tooltip from "./Tooltip";

test("Correct render", () => {
  const { getByTestId } = render(
    <Tooltip>
      <div data-testid="container"></div>
    </Tooltip>
  );

  const child = getByTestId("container");

  fireEvent.mouseOver(child);

  const element = getByTestId("prismane-tooltip");

  expect(element).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(
    <Tooltip onClick={mock}>
      <div data-testid="container"></div>
    </Tooltip>
  );

  const child = getByTestId("container");

  fireEvent.mouseOver(child);

  const element = getByTestId("prismane-tooltip");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(
    <Tooltip className="custom-class">
      <div data-testid="container"></div>
    </Tooltip>
  );

  const child = getByTestId("container");

  fireEvent.mouseOver(child);

  const element = getByTestId("prismane-tooltip");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(
    <Tooltip data-testprop="test-prop">
      <div data-testid="container"></div>
    </Tooltip>
  );

  const child = getByTestId("container");

  fireEvent.mouseOver(child);

  const element = getByTestId("prismane-tooltip");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
