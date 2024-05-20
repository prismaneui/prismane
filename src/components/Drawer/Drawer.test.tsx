import React from "react";
import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Drawer from "./Drawer";

test("Correct render", () => {
  const { getByText } = render(<Drawer open>Hello, world!</Drawer>);

  const element = getByText("Hello, world!");

  expect(element).toBeInTheDocument();
});

test("Correct render with inner components", () => {
  const { getByTestId } = render(
    <Drawer open>
      <Drawer.Header>lorem</Drawer.Header>
      <Drawer.Footer>lorem</Drawer.Footer>
    </Drawer>
  );

  const element = getByTestId("prismane-drawer");

  const header = getByTestId("prismane-drawer-header");

  const footer = getByTestId("prismane-drawer-footer");

  expect(element).toBeInTheDocument();

  expect(header).toBeInTheDocument();

  expect(footer).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(
    <Drawer open onClick={mock}>
      Hello, world!
    </Drawer>
  );

  const element = getByTestId("prismane-drawer");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(
    <Drawer open className="custom-class">
      Hello, world!
    </Drawer>
  );

  const element = getByTestId("prismane-drawer");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Drawer open data-testprop="test-prop" />);

  const element = getByTestId("prismane-drawer");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
