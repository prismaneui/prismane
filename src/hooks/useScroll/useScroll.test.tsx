import { renderHook, act } from "@testing-library/react-hooks";
import useScroll from "./useScroll";

describe("useScroll", () => {
  it("should initialize with default values", () => {
    const { result } = renderHook(() => useScroll());

    expect(result.current.position).toEqual({ x: 0, y: 0 });
    expect(result.current.direction).toBe("none");
  });

  it("should scroll to top", () => {
    const { result } = renderHook(() => useScroll());

    act(() => {
      result.current.scrollToTop();
    });
  });

  it("should scroll to bottom", () => {
    const { result } = renderHook(() => useScroll());

    act(() => {
      result.current.scrollToBottom();
    });
  });

  it("should scroll to a specific position", () => {
    const { result } = renderHook(() => useScroll());

    act(() => {
      result.current.scrollToPosition(100, 200);
    });
  });

  it("should scroll to an element by id", () => {
    const targetElement = document.createElement("div");
    targetElement.id = "targetElement";
    document.body.appendChild(targetElement);

    const { result } = renderHook(() => useScroll());

    act(() => {
      result.current.scrollToId("targetElement");
    });
  });
});
