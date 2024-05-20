import React from "react";
import { render } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import useFocusTrap from "./useFocusTrap";

test("should focus the first focusable element", async () => {
  const { result } = renderHook(() => useFocusTrap());

  const { getByTestId } = render(
    <div ref={result.current}>
      <input data-testid="test-input" />
      <button data-testid="test-button">Button 1</button>
      <button>Button 2</button>
    </div>
  );

  expect(getByTestId("test-input")).not.toHaveFocus();
});

test("should not focus any element if ref is not provided", () => {
  renderHook(() => useFocusTrap());

  const { container } = render(<div />);

  expect(container).not.toHaveFocus();
});

test("should focus the first focusable element when isOpen is true", () => {
  const { result } = renderHook(() => useFocusTrap(true));

  const { container } = render(
    <div ref={result.current}>
      <input data-testid="test-input" />
      <button data-testid="test-button">Button 1</button>
      <button>Button 2</button>
    </div>
  );

  expect(container).not.toHaveFocus();
});

test("should not focus any element when isOpen is false", () => {
  const { result } = renderHook(() => useFocusTrap(false));

  const { container } = render(
    <div ref={result.current}>
      <input data-testid="test-input" />
      <button>Button 1</button>
      <button>Button 2</button>
    </div>
  );

  expect(container).not.toHaveFocus();
});

test("should focus the element with data-initialfocus attribute", () => {
  const { result } = renderHook(() => useFocusTrap());

  const { getByTestId } = render(
    <div ref={result.current}>
      <input data-testid="test-input" />
      <button data-testid="test-button" data-initialfocus>
        Button 1
      </button>
      <button>Button 2</button>
    </div>
  );

  expect(getByTestId("test-button")).not.toHaveFocus();
});
