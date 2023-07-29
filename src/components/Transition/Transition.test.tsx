import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Transition from "./Transition";

test("Correct render", () => {
  const { getByTestId } = render(<Transition />);

  const element = getByTestId("prismane-transition");

  expect(element).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(<Transition onClick={mock} />);

  const element = getByTestId("prismane-transition");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(<Transition className="custom-class" />);

  const element = getByTestId("prismane-transition");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Transition data-testprop="test-prop" />);

  const element = getByTestId("prismane-transition");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
