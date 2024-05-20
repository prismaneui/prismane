import React from "react";
import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Dialog from "./Dialog";

test("Correct render", () => {
  const { getByText } = render(<Dialog open>Hello, world!</Dialog>);

  const element = getByText("Hello, world!");

  expect(element).toBeInTheDocument();
});

test("Correct render with inner components", () => {
  const { getByTestId } = render(
    <Dialog open>
      <Dialog.Header>lorem</Dialog.Header>
      <Dialog.Footer>lorem</Dialog.Footer>
    </Dialog>
  );

  const element = getByTestId("prismane-dialog");

  const header = getByTestId("prismane-dialog-header");

  const footer = getByTestId("prismane-dialog-footer");

  expect(element).toBeInTheDocument();

  expect(header).toBeInTheDocument();

  expect(footer).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(
    <Dialog open onClick={mock}>
      Hello, world!
    </Dialog>
  );

  const element = getByTestId("prismane-dialog");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(
    <Dialog open className="custom-class">
      Hello, world!
    </Dialog>
  );

  const element = getByTestId("prismane-dialog");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Dialog open data-testprop="test-prop" />);

  const element = getByTestId("prismane-dialog");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
