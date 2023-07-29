import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Highlight from "./Highlight";

test("Correct render", () => {
  const { getByText } = render(<Highlight>Hello, world!</Highlight>);

  const element = getByText("Hello, world!");

  expect(element).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(
    <Highlight onClick={mock}>Hello, world!</Highlight>
  );

  const element = getByTestId("prismane-highlight");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(
    <Highlight className="custom-class">Hello, world!</Highlight>
  );

  const element = getByTestId("prismane-highlight");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Highlight data-testprop="test-prop" />);

  const element = getByTestId("prismane-highlight");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
