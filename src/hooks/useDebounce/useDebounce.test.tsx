import React from "react";
import { vi } from "vitest";
import { renderHook, act } from "@testing-library/react-hooks";
// Hook
import useDebounce from "./useDebounce";

vi.useFakeTimers();

test("Correct return of initial value", () => {
  const { result } = renderHook(() => useDebounce("initial value"));

  expect(result.current).toBe("initial value");
});

test("Correct update of value after delay", () => {
  const { result, rerender } = renderHook((value) => useDebounce(value), {
    initialProps: "initial value",
  });

  expect(result.current).toBe("initial value");

  act(() => {
    rerender("updated value");
  });

  vi.advanceTimersByTime(500);

  expect(result.current).toBe("updated value");
});

test("Correct value within delay", () => {
  const { result, rerender } = renderHook((value) => useDebounce(value), {
    initialProps: "initial value",
  });

  expect(result.current).toBe("initial value");

  act(() => {
    rerender("updated value");
  });

  vi.advanceTimersByTime(300);

  expect(result.current).toBe("initial value");

  vi.advanceTimersByTime(200);

  expect(result.current).toBe("updated value");
});
