import { renderHook, act } from "@testing-library/react-hooks";
// Hook
import useAnimation from "./useAnimation";

test("Correct initial values", () => {
  const { result } = renderHook(() => useAnimation());

  expect(result.current.animating).toBe(false);
  expect(result.current.duration).toBe(150);
  expect(result.current.timing).toBe("ease");
});

test("Correct toggling of state", () => {
  const { result } = renderHook(() => useAnimation());

  expect(result.current.animating).toBe(false);

  act(() => {
    result.current.animate();
  });
  expect(result.current.animating).toBe(true);

  act(() => {
    result.current.animate();
  });
  expect(result.current.animating).toBe(false);
});

test("Correct usage of provided parameters", () => {
  const { result } = renderHook(() => useAnimation(true, 300, "linear"));

  expect(result.current.animating).toBe(true);
  expect(result.current.duration).toBe(300);
  expect(result.current.timing).toBe("linear");
});
