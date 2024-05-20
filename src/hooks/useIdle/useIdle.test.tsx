import { test, vi } from "vitest";
import { renderHook, act } from "@testing-library/react-hooks";
// Hook
import useIdle from "./useIdle";

test("Correct initial value", () => {
  const { result } = renderHook(() => useIdle(3000, ["mousemove"], true));

  const isIdle = result.current;

  expect(isIdle).toBe(true);
});

test("Correct status update", () => {
  const { result } = renderHook(() => useIdle(3000, ["mousemove"], true));

  expect(result.current).toBe(true);

  act(() => {
    window.dispatchEvent(new Event("mousemove"));
  });

  expect(result.current).toBe(false);
});

test("Correct not updating state if other events are triggered", () => {
  vi.useFakeTimers();
  const { result } = renderHook(() => useIdle(3000, ["keyup"], true));

  expect(result.current).toBe(true);

  act(() => {
    window.dispatchEvent(new Event("mousemove"));
  });

  expect(result.current).toBe(true);

  vi.advanceTimersByTime(3000);

  expect(result.current).toBe(true);
});

test("Correct cleanup of eventListeners on unmount", () => {
  const removeEventListener = vi.spyOn(window, "removeEventListener");

  const { result, unmount } = renderHook(() =>
    useIdle(3000, ["mousemove"], true)
  );

  expect(result.current).toBe(true);

  unmount();

  expect(removeEventListener).toHaveBeenCalledTimes(1);
});
