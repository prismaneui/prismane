import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import useFocusTrap from "./useFocusTrap";

describe("useFocusTrap", () => {
  it("should focus the first focusable element", () => {
    const { result } = renderHook(() => useFocusTrap());

    const { getByTestId, container } = render(
      <div ref={result.current}>
        <input data-testid="test-input" />
        <button data-testid="test-button">Button 1</button>
        <button>Button 2</button>
      </div>
    );

    expect(container).not.toHaveFocus();
  });

  it("should not focus any element if ref is not provided", () => {
    const { result } = renderHook(() => useFocusTrap());

    const { container } = render(<div />);

    expect(container).not.toHaveFocus();
  });

  it("should focus the first focusable element when isOpen is true", () => {
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

  it("should not focus any element when isOpen is false", () => {
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

  it("should focus the element with data-initialfocus attribute", () => {
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
});
