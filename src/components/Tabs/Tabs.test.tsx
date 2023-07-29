import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Tabs from "./Tabs";

test("Correct render", () => {
  const { getByText } = render(<Tabs>Hello, world!</Tabs>);

  const element = getByText("Hello, world!");

  expect(element).toBeInTheDocument();
});

test("Correct render with inner components", () => {
  const { getByTestId } = render(
    <Tabs defaultValue="first">
      <Tabs.List>
        <Tabs.Tab value="first">First</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="first">First</Tabs.Panel>
    </Tabs>
  );

  const element = getByTestId("prismane-tabs");

  const panel = getByTestId("prismane-tabs-panel");

  const list = getByTestId("prismane-tabs-list");

  const tab = getByTestId("prismane-tabs-tab");

  expect(element).toBeInTheDocument();

  expect(panel).toBeInTheDocument();

  expect(list).toBeInTheDocument();

  expect(tab).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(<Tabs onClick={mock}>Hello, world!</Tabs>);

  const element = getByTestId("prismane-tabs");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(
    <Tabs className="custom-class">Hello, world!</Tabs>
  );

  const element = getByTestId("prismane-tabs");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Tabs data-testprop="test-prop" />);

  const element = getByTestId("prismane-tabs");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
