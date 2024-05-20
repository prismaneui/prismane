import React from "react";
import { test, vi } from "vitest";
import { renderHook, act } from "@testing-library/react-hooks";
import { fireEvent } from "@testing-library/react";
// Hook
import useKeyboardShortcut from "./useKeyboardShortcut";

test("Correct call of the callback on key combination", () => {
  const mockCallback = vi.fn();
  const keys = ["Control", "Alt", "A"];

  renderHook(() => useKeyboardShortcut(keys, mockCallback, true));

  act(() => {
    fireEvent.keyDown(document, {
      key: "Control",
      ctrlKey: true,
    });
  });

  expect(mockCallback).not.toHaveBeenCalled();

  act(() => {
    fireEvent.keyDown(document, {
      key: "Alt",
      ctrlKey: true,
      altKey: true,
    });
  });

  expect(mockCallback).not.toHaveBeenCalled();

  act(() => {
    fireEvent.keyDown(document, {
      key: "A",
      ctrlKey: true,
      altKey: true,
    });
  });

  expect(mockCallback).toHaveBeenCalled();
});

test("Correct not calling the callback on not full combination", () => {
  const mockCallback = vi.fn();
  const keys = ["Control", "Alt", "A"];

  renderHook(() => useKeyboardShortcut(keys, mockCallback, true));

  act(() => {
    fireEvent.keyDown(document, {
      key: "Control",
      ctrlKey: true,
    });
  });

  expect(mockCallback).not.toHaveBeenCalled();

  act(() => {
    fireEvent.keyDown(document, {
      key: "A",
      ctrlKey: true,
    });
  });

  expect(mockCallback).not.toHaveBeenCalled();
});

test("Correct not calling the callback when shouldRegister is false", () => {
  const mockCallback = vi.fn();
  const keys = ["Control", "Alt", "A"];

  renderHook(() => useKeyboardShortcut(keys, mockCallback, false));

  act(() => {
    fireEvent.keyDown(document, {
      key: "Control",
      ctrlKey: true,
    });
  });

  expect(mockCallback).not.toHaveBeenCalled();

  act(() => {
    fireEvent.keyDown(document, {
      key: "Alt",
      ctrlKey: true,
      altKey: true,
    });
  });

  expect(mockCallback).not.toHaveBeenCalled();

  act(() => {
    fireEvent.keyDown(document, {
      key: "A",
      ctrlKey: true,
      altKey: true,
    });
  });

  expect(mockCallback).not.toHaveBeenCalled();
});

test("Correct filter of pressed keys", () => {
  const mockCallback = vi.fn();
  const keys = ["Control", "Alt", "A"];

  renderHook(() => useKeyboardShortcut(keys, mockCallback, true));

  act(() => {
    fireEvent.keyDown(document, {
      key: "Control",
      ctrlKey: true,
    });
  });

  act(() => {
    fireEvent.keyDown(document, {
      key: "Alt",
      ctrlKey: true,
      altKey: true,
    });
  });

  act(() => {
    fireEvent.keyDown(document, {
      key: "A",
      ctrlKey: true,
      altKey: true,
    });
  });

  expect(mockCallback).toHaveBeenCalledTimes(1);

  act(() => {
    fireEvent.keyDown(document, {
      key: "A",
      ctrlKey: true,
      altKey: true,
    });
  });

  expect(mockCallback).toHaveBeenCalledTimes(1);
});
