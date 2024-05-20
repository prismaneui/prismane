import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { render, fireEvent } from "@testing-library/react";
// Hook
import useDraggable from "./useDraggable";

test("Correct move on element drag", () => {
  const { result } = renderHook(() => useDraggable());

  const container = (
    <div
      ref={result.current.ref}
      style={{
        width: "100px",
        height: "100px",
        position: "absolute",
        top: result.current.position.y,
        left: result.current.position.x,
      }}
      data-testid="container"
    />
  );

  const { getByTestId } = render(container);

  act(() => {
    fireEvent.mouseDown(getByTestId("container"), { bubbles: true });
  });

  act(() => {
    fireEvent.mouseMove(getByTestId("container"), { pageX: 50, pageY: 50 });
  });

  expect(getByTestId("container").style.left);
});

test("Correct initial position", () => {
  const { result } = renderHook(() => useDraggable({ x: 50, y: 50 }));

  const container = (
    <div
      ref={result.current.ref}
      style={{
        width: "100px",
        height: "100px",
        position: "absolute",
        top: result.current.position.y,
        left: result.current.position.x,
      }}
    />
  );

  render(container);

  expect(result.current.position).toEqual({ x: 50, y: 50 });
});
