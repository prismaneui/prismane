import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Divider from "./Divider";

test("Correct render", () => {
  const { getByTestId } = render(<Divider />);

  const element = getByTestId("prismane-divider");

  expect(element).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(<Divider onClick={mock} />);

  const element = getByTestId("prismane-divider");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(<Divider className="custom-class" />);

  const element = getByTestId("prismane-divider");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Divider data-testprop="test-prop" />);

  const element = getByTestId("prismane-divider");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
