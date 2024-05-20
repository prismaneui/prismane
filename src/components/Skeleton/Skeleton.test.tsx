import React from "react";
import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Skeleton from "./Skeleton";

test("Correct render", () => {
  const { getByTestId } = render(<Skeleton />);

  const element = getByTestId("prismane-skeleton");

  expect(element).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(<Skeleton onClick={mock} />);

  const element = getByTestId("prismane-skeleton");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(<Skeleton className="custom-class" />);

  const element = getByTestId("prismane-skeleton");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Skeleton data-testprop="test-prop" />);

  const element = getByTestId("prismane-skeleton");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
