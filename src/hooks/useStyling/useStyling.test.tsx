import { renderHook } from "@testing-library/react-hooks";
// Hook
import useStyling from "./useStyling";

test("Correct render of hook", () => {
  const { result } = renderHook(() => useStyling({}));

  expect(result.current).toEqual([]);
});
