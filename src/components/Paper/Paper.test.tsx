import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Paper from "./Paper";

test("Correct render", () => {
  const { getByText } = render(<Paper>Hello, world!</Paper>);

  const element = getByText("Hello, world!");

  expect(element).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(<Paper onClick={mock}>Hello, world!</Paper>);

  const element = getByTestId("prismane-paper");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(
    <Paper className="custom-class">Hello, world!</Paper>
  );

  const element = getByTestId("prismane-paper");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Paper data-testprop="test-prop" />);

  const element = getByTestId("prismane-paper");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
