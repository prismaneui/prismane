import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Grid from "./Grid";

test("Correct render", () => {
  const { getByText } = render(<Grid>Hello, world!</Grid>);

  const element = getByText("Hello, world!");

  expect(element).toBeInTheDocument();
});

test("Correct render with inner components", () => {
  const { getByTestId } = render(
    <Grid>
      <Grid.Item>lorem</Grid.Item>
    </Grid>
  );

  const element = getByTestId("prismane-grid");

  const item = getByTestId("prismane-grid-item");

  expect(element).toBeInTheDocument();

  expect(item).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(<Grid onClick={mock}>Hello, world!</Grid>);

  const element = getByTestId("prismane-grid");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(
    <Grid className="custom-class">Hello, world!</Grid>
  );

  const element = getByTestId("prismane-grid");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Grid data-testprop="test-prop" />);

  const element = getByTestId("prismane-grid");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
