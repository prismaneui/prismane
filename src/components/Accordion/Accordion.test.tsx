import React from "react";
import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Accordion from "./Accordion";

test("Correct render", () => {
  const { getByText } = render(<Accordion>Hello, world!</Accordion>);

  const element = getByText("Hello, world!");

  expect(element).toBeInTheDocument();
});

test("Correct render with inner components", () => {
  const { getByTestId } = render(
    <Accordion>
      <Accordion.Control>
        <div></div>
      </Accordion.Control>
      <Accordion.Panel>
        <Accordion.Item>lorem</Accordion.Item>
        <Accordion.Icon>lorem</Accordion.Icon>
      </Accordion.Panel>
    </Accordion>
  );

  const element = getByTestId("prismane-accordion");

  const control = getByTestId("prismane-accordion-control");

  const panel = getByTestId("prismane-accordion-panel");

  const item = getByTestId("prismane-accordion-item");

  const icon = getByTestId("prismane-accordion-icon");

  expect(element).toBeInTheDocument();

  expect(control).toBeInTheDocument();

  expect(panel).toBeInTheDocument();

  expect(item).toBeInTheDocument();

  expect(icon).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(
    <Accordion onClick={mock}>Hello, world!</Accordion>
  );

  const element = getByTestId("prismane-accordion");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(
    <Accordion className="custom-class">Hello, world!</Accordion>
  );

  const element = getByTestId("prismane-accordion");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Accordion data-testprop="test-prop" />);

  const element = getByTestId("prismane-accordion");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
