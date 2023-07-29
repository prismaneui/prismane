import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Modal from "./Modal";

test("Correct render", () => {
  const { getByText } = render(<Modal open>Hello, world!</Modal>);

  const element = getByText("Hello, world!");

  expect(element).toBeInTheDocument();
});

test("Correct render with inner components", () => {
  const { getByTestId } = render(
    <Modal open>
      <Modal.Header>lorem</Modal.Header>
      <Modal.Footer>lorem</Modal.Footer>
    </Modal>
  );

  const element = getByTestId("prismane-modal");

  const header = getByTestId("prismane-modal-header");

  const footer = getByTestId("prismane-modal-footer");

  expect(element).toBeInTheDocument();

  expect(header).toBeInTheDocument();

  expect(footer).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(
    <Modal open onClick={mock}>
      Hello, world!
    </Modal>
  );

  const element = getByTestId("prismane-modal");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(
    <Modal open className="custom-class">
      Hello, world!
    </Modal>
  );

  const element = getByTestId("prismane-modal");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Modal open data-testprop="test-prop" />);

  const element = getByTestId("prismane-modal");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
