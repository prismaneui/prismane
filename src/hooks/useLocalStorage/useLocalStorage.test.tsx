import { renderHook, act } from "@testing-library/react-hooks";
// Hook
import useLocalStorage from "./useLocalStorage";

test("Correct initialization with initial value if none exists", () => {
  const key = "test";

  const defaultValue = "value";

  const { result } = renderHook(() => useLocalStorage(key, defaultValue));

  expect(result.current[0]).toEqual(defaultValue);
});

test("Correct initialization of value when it exists", () => {
  const key = "test";

  const storedValue = "value";

  const newValue = "value_2";

  const { result } = renderHook(() => useLocalStorage(key, newValue));

  expect(result.current[0]).toEqual(storedValue);
});

test("Correct update of value when state changes", () => {
  const key = "count";

  const initialValue = { count: 0 };

  const newValue = { count: 1 };

  const { result } = renderHook(() => useLocalStorage(key, initialValue));

  expect(result.current[0]).toEqual(initialValue);

  act(() => {
    result.current[1](newValue);
  });

  expect(result.current[0]).toEqual(newValue);

  expect(JSON.parse(localStorage.getItem(key)!)).toEqual(newValue);
});
