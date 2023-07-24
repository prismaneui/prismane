import { renderHook, act } from "@testing-library/react-hooks";
import useToggle from "./useToggle";

test("Correct initial value", () => {
  const { result } = renderHook(() => useToggle([true, false]));
  expect(result.current[0]).toBe(true);
});

test("Correct toggle between values", () => {
  const { result } = renderHook(() => useToggle(["a", "b", "c"]));

  expect(result.current[0]).toBe("a");

  act(() => {
    result.current[1]("b");
  });

  expect(result.current[0]).toBe("b");

  act(() => {
    result.current[1]();
  });

  expect(result.current[0]).toBe("c");

  act(() => {
    result.current[1]("d");
  });

  expect(result.current[0]).toBe("d");

  act(() => {
    result.current[1]();
  });

  expect(result.current[0]).toBe("a");
});
