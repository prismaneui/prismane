import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Text from "./Text";

test("Correct render", () => {
  const { getByTestId } = render(<Text />);

  const element = getByTestId("prismane-text");

  expect(element).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(<Text onClick={mock} />);

  const element = getByTestId("prismane-text");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(<Text className="custom-class" />);

  const element = getByTestId("prismane-text");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Text data-testprop="test-prop" />);

  const element = getByTestId("prismane-text");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
