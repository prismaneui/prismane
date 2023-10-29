import { renderHook, act } from "@testing-library/react-hooks";
import useSorting from "./useSorting";

describe("useSorting Hook", () => {
  it("should initially set sorted data with 'asc' direction", () => {
    const data = [
      { name: "Alice", age: 30 },
      { name: "Bob", age: 25 },
    ];

    const { result } = renderHook(() => useSorting(data, "name"));

    expect(result.current.sorted).toEqual(data);
    expect(result.current.direction).toBe("asc");
  });

  it("should sort data by the selected key in ascending order", () => {
    const data = [
      { name: "Alice", age: 30 },
      { name: "Bob", age: 25 },
    ];

    const { result } = renderHook(() => useSorting(data, "name"));

    act(() => result.current.toggleDirection());

    expect(result.current.sorted).toEqual([
      { name: "Bob", age: 25 },
      { name: "Alice", age: 30 },
    ]);

    act(() => {
      result.current.setKey("age");
    });

    expect(result.current.sorted).toEqual([
      { name: "Bob", age: 25 },
      { name: "Alice", age: 30 },
    ]);
  });

  it("should sort data by the selected key in descending order", () => {
    const data = [
      { name: "Alice", age: 30 },
      { name: "Bob", age: 25 },
    ];

    const { result } = renderHook(() => useSorting(data, "name"));

    act(() => {
      result.current.setKey("age");
    });

    act(() => {
      result.current.toggleDirection();
    });

    expect(result.current.sorted).toEqual([
      { name: "Alice", age: 30 },
      { name: "Bob", age: 25 },
    ]);
  });

  it("should reset direction when key changes", () => {
    const data = [
      { name: "Alice", age: 30 },
      { name: "Bob", age: 25 },
    ];

    const { result } = renderHook(() => useSorting(data, "name"));

    act(() => {
      result.current.toggleDirection();
    });

    expect(result.current.direction).toBe("desc");

    act(() => {
      result.current.setKey("age");
    });

    expect(result.current.direction).toBe("asc");
  });
});
