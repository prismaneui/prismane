import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import useNetworkStatus from "./useNetworkStatus";

describe("useNetworkStatus", () => {
  it("should initialize with correct online status", () => {
    const { result } = renderHook(() => useNetworkStatus());
    expect(result.current).toBe(true);
  });

  it("should update status when online event is triggered", () => {
    const { result } = renderHook(() => useNetworkStatus());

    act(() => {
      window.dispatchEvent(new Event("online"));
    });

    expect(result.current).toBe(true);
  });

  it("should update status when offline event is triggered", () => {
    const { result } = renderHook(() => useNetworkStatus());

    act(() => {
      window.dispatchEvent(new Event("offline"));
    });

    expect(result.current).toBe(false);
  });
});
