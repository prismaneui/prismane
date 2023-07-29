import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Progress from "./Progress";

test("Correct render", () => {
  const { getByTestId } = render(<Progress />);

  const element = getByTestId("prismane-progress");

  expect(element).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(<Progress onClick={mock} />);

  const element = getByTestId("prismane-progress");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(<Progress className="custom-class" />);

  const element = getByTestId("prismane-progress");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Progress data-testprop="test-prop" />);

  const element = getByTestId("prismane-progress");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
