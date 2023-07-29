import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Chip from "./Chip";

test("Correct render", () => {
  const { getByText } = render(<Chip>Hello, world!</Chip>);

  const element = getByText("Hello, world!");

  expect(element).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(<Chip onClick={mock}>Hello, world!</Chip>);

  const element = getByTestId("prismane-chip");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(
    <Chip className="custom-class">Hello, world!</Chip>
  );

  const element = getByTestId("prismane-chip");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Chip data-testprop="test-prop" />);

  const element = getByTestId("prismane-chip");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
