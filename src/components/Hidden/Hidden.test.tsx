import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Hidden from "./Hidden";

test("Correct render", () => {
  const { getByText } = render(<Hidden>Hello, world!</Hidden>);

  const element = getByText("Hello, world!");

  expect(element).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(<Hidden onClick={mock}>Hello, world!</Hidden>);

  const element = getByTestId("prismane-hidden");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(
    <Hidden className="custom-class">Hello, world!</Hidden>
  );

  const element = getByTestId("prismane-hidden");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Hidden data-testprop="test-prop" />);

  const element = getByTestId("prismane-hidden");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
