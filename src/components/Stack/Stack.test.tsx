import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Stack from "./Stack";

test("Correct render", () => {
  const { getByTestId } = render(<Stack />);

  const element = getByTestId("prismane-stack");

  expect(element).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(<Stack onClick={mock} />);

  const element = getByTestId("prismane-stack");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(<Stack className="custom-class" />);

  const element = getByTestId("prismane-stack");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Stack data-testprop="test-prop" />);

  const element = getByTestId("prismane-stack");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
