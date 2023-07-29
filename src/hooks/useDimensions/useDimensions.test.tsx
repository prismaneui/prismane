import { test, vi } from "vitest";
import { renderHook } from "@testing-library/react-hooks";
// Hook
import useDimensions from "./useDimensions";

test("Should return correct dimensions", () => {
  vi.useFakeTimers();

  const element = document.createElement("div");

  element.style.width = "100px";
  element.style.height = "50px";
  element.style.margin = "10px";
  element.style.padding = "5px";

  const mockRef = { current: element };

  const { unmount } = renderHook(() => useDimensions(mockRef));

  vi.advanceTimersByTime(100);

  unmount();
});
