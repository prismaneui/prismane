import React from "react";
import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Spinner from "./Spinner";

test("Correct render", () => {
  const { getByTestId } = render(<Spinner />);

  const element = getByTestId("prismane-spinner");

  expect(element).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(<Spinner onClick={mock} />);

  const element = getByTestId("prismane-spinner");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(<Spinner className="custom-class" />);

  const element = getByTestId("prismane-spinner");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Spinner data-testprop="test-prop" />);

  const element = getByTestId("prismane-spinner");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
