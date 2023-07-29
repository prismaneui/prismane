import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Image from "./Image";

test("Correct render", () => {
  const { getByTestId } = render(<Image src="/" />);

  const element = getByTestId("prismane-image");

  expect(element).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(<Image onClick={mock} src="/" />);

  const element = getByTestId("prismane-image");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(<Image className="custom-class" src="/" />);

  const element = getByTestId("prismane-image");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Image data-testprop="test-prop" />);

  const element = getByTestId("prismane-image");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
