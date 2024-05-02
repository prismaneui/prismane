import { test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
// Hook
import useOutsideClick from "./useOutsideClick";

const Parent = ({ children, ...props }: any) => {
  return (
    <div {...props} data-testid="parent">
      {children}
    </div>
  );
};

const Child = ({ ...props }: any) => {
  return <div {...props} data-testid="child"></div>;
};

test("Correct callback call on outside click", () => {
  const mockFn = vi.fn();

  const { getByTestId } = render(
    <Parent>
      <Child />
    </Parent>
  );

  const ref = { current: getByTestId("child") };

  renderHook(() => useOutsideClick(ref, mockFn));

  fireEvent.click(getByTestId("parent"));

  expect(mockFn).toHaveBeenCalledTimes(1);
});

test("Correct callback not calling on inside click", () => {
  const mockFn = vi.fn();

  const { getByTestId } = render(
    <Parent>
      <Child />
    </Parent>
  );

  const ref = { current: getByTestId("child") };

  renderHook(() => useOutsideClick(ref, mockFn));

  fireEvent.click(getByTestId("child"));

  expect(mockFn).toHaveBeenCalledTimes(0);
});
