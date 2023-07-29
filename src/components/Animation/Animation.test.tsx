import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Animation from "./Animation";

test("Correct render", () => {
  const { getByText } = render(<Animation>Hello, world!</Animation>);

  const element = getByText("Hello, world!");

  expect(element).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(
    <Animation onClick={mock}>Hello, world!</Animation>
  );

  const element = getByTestId("prismane-animation");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(
    <Animation className="custom-class">Hello, world!</Animation>
  );

  const element = getByTestId("prismane-animation");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Animation data-testprop="test-prop" />);

  const element = getByTestId("prismane-animation");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
