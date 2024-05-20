import React from "react";
import { test, vi } from "vitest";
import { renderHook, act } from "@testing-library/react-hooks";
// Hook
import useMediaQuery from "./useMediaQuery";

test("Correct value return when query does not match", () => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: window.innerWidth <= 768,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });

  const query = "(min-width: 768px)";

  const { result } = renderHook(() => useMediaQuery(query));

  expect(result.current).toBe(false);
});

test("Correct value return when query matches", () => {
  const query = "(min-width: 768px)";

  act(() => {
    window.innerWidth = 1000;
  });

  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: window.innerWidth >= 768,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });

  const { result } = renderHook(() => useMediaQuery(query));

  expect(result.current).toBe(true);
});

// test("Correct update of value on window resize", () => {
//   const query = "(max-width: 768px)";

//   const { result } = renderHook(() => useMediaQuery(query));

//   expect(result.current).toBe(false);

//   act(() => {
//     window.resizeTo(100, 100);
//   });

//   expect(result.current).toBe(true);
// });
