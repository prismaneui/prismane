import React from "react";
import { test, vi } from "vitest";
import { renderHook, act } from "@testing-library/react-hooks";
// Hook
import useMemoization from "./useMemoization";

test("Memoization returns correct cached value", () => {
  const mockFn = vi.fn((param) => param * 2);

  const { result } = renderHook(() => useMemoization());

  const { memoize } = result.current;

  const memoizedFn = memoize((_, pv) => {
    return mockFn(pv);
  });

  let final;

  act(() => {
    final = memoizedFn("number", 5);
  });

  act(() => {
    final = memoizedFn("number", 5);
  });

  expect(final).toBe(10);

  expect(mockFn).toHaveBeenCalledTimes(1);
});

test("Memoization recalculates when default comparison fails", () => {
  const mockFn = vi.fn((param) => param * 2);

  const { result } = renderHook(() => useMemoization());

  const { memoize } = result.current;

  const memoizedFn = memoize((_, pv) => {
    return mockFn(pv);
  });

  let final;

  act(() => {
    final = memoizedFn("number", 5);
  });

  act(() => {
    final = memoizedFn("number", 10);
  });

  expect(final).toBe(20);

  expect(mockFn).toHaveBeenCalledTimes(2);
});

test("Correct ignore of cached value when validator function fails", () => {
  const isEven = (cachedValue: any) => cachedValue % 2 === 0;

  const mockFn = vi.fn((param) => param * 2);

  const { result } = renderHook(() => useMemoization());

  const { memoize } = result.current;

  const memoizedFn = memoize((_, pv) => {
    return mockFn(pv);
  }, isEven);

  let final;

  act(() => {
    final = memoizedFn("number", 5);
  });

  act(() => {
    final = memoizedFn("number", 10);
  });

  expect(final).toBe(20);

  expect(mockFn).toHaveBeenCalledTimes(2);
});
