import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import List from "./List";

test("Correct render", () => {
  const { getByText } = render(<List>Hello, world!</List>);

  const element = getByText("Hello, world!");

  expect(element).toBeInTheDocument();
});

test("Correct render with inner components", () => {
  const { getByTestId } = render(
    <>
      <List>
        <List.Item>
          lorem <List.Icon></List.Icon>
        </List.Item>
      </List>
      <List.Unordered></List.Unordered>
      <List.Ordered></List.Ordered>
    </>
  );

  const element = getByTestId("prismane-list");

  const item = getByTestId("prismane-list-item");

  const icon = getByTestId("prismane-list-icon");

  const unordered = getByTestId("prismane-list-unordered");

  const ordered = getByTestId("prismane-list-ordered");

  expect(element).toBeInTheDocument();

  expect(item).toBeInTheDocument();

  expect(icon).toBeInTheDocument();

  expect(unordered).toBeInTheDocument();

  expect(ordered).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(<List onClick={mock}>Hello, world!</List>);

  const element = getByTestId("prismane-list");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(
    <List className="custom-class">Hello, world!</List>
  );

  const element = getByTestId("prismane-list");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<List data-testprop="test-prop" />);

  const element = getByTestId("prismane-list");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
