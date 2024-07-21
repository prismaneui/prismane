import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Toaster from "./Toaster";

test("Correct render", () => {
  const { getByText } = render(<Toaster>Hello, world!</Toaster>);

  const element = getByText("Hello, world!");

  expect(element).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(
    <Toaster onClick={mock}>Hello, world!</Toaster>
  );

  const element = getByTestId("prismane-toaster");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(
    <Toaster className="custom-class">Hello, world!</Toaster>
  );

  const element = getByTestId("prismane-toaster");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Toaster data-testprop="test-prop" />);

  const element = getByTestId("prismane-toaster");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
