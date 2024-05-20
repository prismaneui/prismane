import React from "react";
import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Alert from "./Alert";

test("Correct render", () => {
  const { getByText } = render(<Alert>Hello, world!</Alert>);

  const element = getByText("Hello, world!");

  expect(element).toBeInTheDocument();
});

test("Correct render with inner components", () => {
  const { getByTestId } = render(
    <Alert>
      <Alert.Title></Alert.Title>
      <Alert.Description></Alert.Description>
    </Alert>
  );

  const element = getByTestId("prismane-alert");

  const title = getByTestId("prismane-alert-title");

  const description = getByTestId("prismane-alert-description");

  expect(element).toBeInTheDocument();

  expect(title).toBeInTheDocument();

  expect(description).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(<Alert onClick={mock}>Hello, world!</Alert>);

  const element = getByTestId("prismane-alert");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(
    <Alert className="custom-class">Hello, world!</Alert>
  );

  const element = getByTestId("prismane-alert");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Alert data-testprop="test-prop" />);

  const element = getByTestId("prismane-alert");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
