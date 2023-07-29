import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Link from "./Link";

test("Correct render", () => {
  const { getByText } = render(<Link>Hello, world!</Link>);

  const element = getByText("Hello, world!");

  expect(element).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(<Link onClick={mock}>Hello, world!</Link>);

  const element = getByTestId("prismane-link");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(
    <Link className="custom-class">Hello, world!</Link>
  );

  const element = getByTestId("prismane-link");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Link data-testprop="test-prop" />);

  const element = getByTestId("prismane-link");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
