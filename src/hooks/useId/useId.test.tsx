import { test } from "vitest";
import { renderHook } from "@testing-library/react-hooks";
import useId from "./useId";

test("Correct generation of random id", () => {
  const { result } = renderHook(() => useId());
  const generatedId = result.current;

  expect(typeof generatedId).toBe("string");
  expect(generatedId.length).toBeGreaterThan(0);
});
