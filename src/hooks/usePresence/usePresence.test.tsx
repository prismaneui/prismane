import { test, vi } from "vitest";
import { renderHook, act } from "@testing-library/react-hooks";
// Hook
import usePresence from "./usePresence";

test("Should be present initially", () => {
  vi.useFakeTimers();

  const { result } = renderHook(() => usePresence(true, 0, () => {}));

  act(() => {
    vi.advanceTimersByTime(100);
  });

  expect(result.current).toBe(true);
});

test("Should be present after duration", async () => {
  vi.useFakeTimers();

  let present = false;

  const { result, rerender } = renderHook(() =>
    usePresence(present, 500, () => {})
  );

  act(() => {
    present = true;
  });

  expect(result.current).toBe(false);

  act(() => {
    vi.advanceTimersByTime(600);
  });

  rerender();

  expect(result.current).toBe(true);
});

test("Callback should be called when presence changes", () => {
  vi.useFakeTimers();

  const mockCallback = vi.fn();

  let present = false;

  const { rerender } = renderHook(() =>
    usePresence(present, 500, mockCallback)
  );

  act(() => {
    present = true;
  });

  act(() => {
    vi.advanceTimersByTime(600);
  });

  rerender();

  expect(mockCallback).toHaveBeenCalledTimes(1);

  act(() => {
    present = false;
  });

  act(() => {
    vi.advanceTimersByTime(600);
  });

  rerender();

  expect(mockCallback).toHaveBeenCalledTimes(2);
});
