import React from "react";
import { test } from "vitest";
import { renderHook, act } from "@testing-library/react-hooks";
// Hook
import useSearch from "./useSearch";

test("should filter results based on the query string", () => {
  const { result } = renderHook(() => useSearch(["apple", "banana", "cherry"]));

  act(() => {
    result.current.setQuery("ban");
  });

  expect(result.current.filtered).toEqual(["banana"]);

  act(() => {
    result.current.setQuery("c");
  });

  expect(result.current.filtered).toEqual(["cherry"]);
});

test("should be case insensitive", () => {
  const { result } = renderHook(() => useSearch(["apple", "Banana", "cherry"]));

  act(() => {
    result.current.setQuery("banana");
  });

  expect(result.current.filtered).toEqual(["Banana"]);
});

test("should filter objects with deep search", () => {
  const data = [
    { name: "John", age: 30 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
  ];

  const { result } = renderHook(() => useSearch(data));

  act(() => {
    result.current.setQuery("Alice");
  });

  expect(result.current.filtered).toEqual([{ name: "Alice", age: 25 }]);
});
