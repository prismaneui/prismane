import { renderHook } from "@testing-library/react-hooks/dom";
import { describe, vi } from "vitest";

// Hook
import useCopyToClipboard from "./useCopyToClipboard";

describe("useCopyToClipboard", () => {
  const originalClipboard = { ...global.navigator.clipboard };

  beforeEach(() => {
    const mockClipboard = { writeText: vi.fn() };
    global.navigator.clipboard = mockClipboard;
  });

  afterEach(() => {
    vi.resetAllMocks();
    global.navigator.clipboard = originalClipboard;
  });

  test("Should return null as initial copied value", () => {
    const { result } = renderHook(() => useCopyToClipboard());

    const [copiedValue] = result.current;
    expect(copiedValue).toBeNull();
  });

  test("Should use clipboard", () => {
    const { result } = renderHook(() => useCopyToClipboard());

    expect(result.current[0]).toBe(null);
    expect(typeof result.current[1]).toBe("function");
  });
});
