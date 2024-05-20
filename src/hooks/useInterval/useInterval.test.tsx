import React from "react";
import { test, vi } from "vitest";
import { renderHook, act } from "@testing-library/react-hooks";
// Hook
import useInterval from "./useInterval";

test("Correct call of the callback in the right interval", () => {
  vi.useFakeTimers();

  const callback = vi.fn();
  const delay = 1000;

  const { result } = renderHook(() => useInterval(callback, delay));

  expect(result.current.active).toBe(false);

  act(() => {
    result.current.start();
  });

  expect(result.current.active).toBe(true);

  act(() => {
    vi.advanceTimersByTime(delay);
  });

  expect(callback).toHaveBeenCalledTimes(1);

  act(() => {
    vi.advanceTimersByTime(delay);
  });

  expect(callback).toHaveBeenCalledTimes(2);

  act(() => {
    result.current.stop();
  });

  expect(result.current.active).toBe(false);

  act(() => {
    vi.advanceTimersByTime(delay);
  });

  expect(callback).toHaveBeenCalledTimes(2);
});

test("Correct toggling on and off of the interval", () => {
  vi.useFakeTimers();

  const callback = vi.fn();
  const delay = 1000;

  const { result } = renderHook(() => useInterval(callback, delay));

  expect(result.current.active).toBe(false);

  act(() => {
    result.current.toggle();
  });

  expect(result.current.active).toBe(true);

  act(() => {
    vi.advanceTimersByTime(delay);
  });

  expect(callback).toHaveBeenCalledTimes(1);

  act(() => {
    result.current.toggle();
  });

  expect(result.current.active).toBe(false);

  act(() => {
    vi.advanceTimersByTime(delay);
  });

  expect(callback).toHaveBeenCalledTimes(1);

  act(() => {
    result.current.toggle();
  });

  expect(result.current.active).toBe(true);

  act(() => {
    vi.advanceTimersByTime(delay);
  });

  expect(callback).toHaveBeenCalledTimes(2);
});
