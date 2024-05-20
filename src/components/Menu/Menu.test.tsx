import React from "react";
import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Menu from "./Menu";

test("Correct render", () => {
  const { getByText } = render(<Menu open>Hello, world!</Menu>);

  const element = getByText("Hello, world!");

  expect(element).toBeInTheDocument();
});

test("Correct render with inner components", () => {
  const { getByTestId } = render(
    <Menu open>
      <Menu.Item>
        lorem <Menu.Icon></Menu.Icon>
      </Menu.Item>
      <Menu.Label>lorem</Menu.Label>
    </Menu>
  );

  const element = getByTestId("prismane-menu");

  const item = getByTestId("prismane-menu-item");

  const icon = getByTestId("prismane-menu-icon");

  const label = getByTestId("prismane-menu-label");

  expect(element).toBeInTheDocument();

  expect(item).toBeInTheDocument();

  expect(icon).toBeInTheDocument();

  expect(label).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(
    <Menu onClick={mock} open>
      Hello, world!
    </Menu>
  );

  const element = getByTestId("prismane-menu");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(
    <Menu className="custom-class" open>
      Hello, world!
    </Menu>
  );

  const element = getByTestId("prismane-menu");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Menu data-testprop="test-prop" open />);

  const element = getByTestId("prismane-menu");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
