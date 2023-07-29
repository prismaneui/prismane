import { renderHook, act } from "@testing-library/react-hooks";
// Hook
import useCounter from "./useCounter";

test("Correct initial values", () => {
  const { result } = renderHook(() => useCounter());

  expect(result.current.counter).toBe(0);
});

test("Correct increment with default step", () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });
  expect(result.current.counter).toBe(1);

  act(() => {
    result.current.increment();
  });
  expect(result.current.counter).toBe(2);
});

test("Correct increment with custom step", () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment(5);
  });
  expect(result.current.counter).toBe(5);

  act(() => {
    result.current.increment(3);
  });
  expect(result.current.counter).toBe(8);
});

test("Correct limit of maxValue", () => {
  const { result } = renderHook(() => useCounter(8, 0, 10));

  act(() => {
    result.current.increment();
  });
  expect(result.current.counter).toBe(9);

  act(() => {
    result.current.increment();
  });
  expect(result.current.counter).toBe(10);

  act(() => {
    result.current.increment();
  });
  expect(result.current.counter).toBe(10);
});

test("Correct decrement with default step", () => {
  const { result } = renderHook(() => useCounter(5));

  act(() => {
    result.current.decrement();
  });
  expect(result.current.counter).toBe(4);

  act(() => {
    result.current.decrement();
  });
  expect(result.current.counter).toBe(3);
});

test("Correct decrement with custom step", () => {
  const { result } = renderHook(() => useCounter(8));

  act(() => {
    result.current.decrement(5);
  });
  expect(result.current.counter).toBe(3);

  act(() => {
    result.current.decrement(3);
  });
  expect(result.current.counter).toBe(0);
});

test("Correct limit of minValue", () => {
  const { result } = renderHook(() => useCounter(2, 0, 5));

  act(() => {
    result.current.decrement();
  });
  expect(result.current.counter).toBe(1);

  act(() => {
    result.current.decrement();
  });
  expect(result.current.counter).toBe(0);

  act(() => {
    result.current.decrement();
  });
  expect(result.current.counter).toBe(0);
});

test("Correct set of the counter value", () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.set(10);
  });
  expect(result.current.counter).toBe(10);

  act(() => {
    result.current.set(5);
  });
  expect(result.current.counter).toBe(5);
});
