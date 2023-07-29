import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Popover from "./Popover";

test("Correct render", () => {
  const { getByText } = render(<Popover open>Hello, world!</Popover>);

  const element = getByText("Hello, world!");

  expect(element).toBeInTheDocument();
});

test("Correct render with inner components", () => {
  const { getByTestId } = render(
    <Popover>
      <Popover.Control>
        <div></div>
      </Popover.Control>
      <Popover.Panel>Hello, world!</Popover.Panel>
    </Popover>
  );

  const element = getByTestId("prismane-popover");

  const control = getByTestId("prismane-popover-control");

  fireEvent(
    control,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  const panel = getByTestId("prismane-popover-panel");

  expect(element).toBeInTheDocument();

  expect(control).toBeInTheDocument();

  expect(panel).toBeInTheDocument();
});

test("Correct click event", () => {
  const mock = vi.fn();

  const { getByTestId } = render(
    <Popover onClick={mock} open>
      Hello, world!
    </Popover>
  );

  const element = getByTestId("prismane-popover");

  fireEvent.click(element);

  expect(mock).toHaveBeenCalledTimes(1);
});

test("Correct render with custom className", () => {
  const { getByTestId } = render(
    <Popover className="custom-class" open>
      Hello, world!
    </Popover>
  );

  const element = getByTestId("prismane-popover");

  expect(element).toHaveClass("custom-class");
});

test("Correct render with custom prop", () => {
  const { getByTestId } = render(<Popover data-testprop="test-prop" open />);

  const element = getByTestId("prismane-popover");

  expect(element).toBeInTheDocument();

  expect(element).toHaveAttribute("data-testprop", "test-prop");
});
