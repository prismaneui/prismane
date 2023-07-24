import { test } from "vitest";
import { renderHook, act } from "@testing-library/react-hooks";
// Hook
import usePrevious from "./usePrevious";

test("Correct value of undefined on first provided value", () => {
  const { result } = renderHook(() => usePrevious(0));

  expect(result.current).toBeUndefined();
});

test("Correct return of previous value on state update", () => {
  const { result, rerender } = renderHook((value) => usePrevious(value), {
    initialProps: 0,
  });

  expect(result.current).toBeUndefined();

  act(() => {
    rerender(10);
  });

  expect(result.current).toBe(0);

  act(() => {
    rerender(20);
  });

  expect(result.current).toBe(10);

  act(() => {
    rerender(30);
  });

  expect(result.current).toBe(20);
});
