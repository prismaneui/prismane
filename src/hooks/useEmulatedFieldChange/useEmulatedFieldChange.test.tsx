import { test, vi } from "vitest";
import { renderHook } from "@testing-library/react-hooks";
import { fireEvent } from "@testing-library/react";
// Hook
import useEmulatedFieldChange from "./useEmulatedFieldChange";

test("Correct update of field value", () => {
  const changeFn = vi.fn();

  const inputRef = { current: document.createElement("input") };

  const emulateChange = useEmulatedFieldChange(inputRef, changeFn);

  emulateChange("Test Value");
  expect(changeFn).toHaveBeenCalledTimes(1);
  expect(inputRef.current.value).toBe("Test Value");

  emulateChange("Updated Value");
  expect(changeFn).toHaveBeenCalledTimes(2);
  expect(inputRef.current.value).toBe("Updated Value");
});

test("Correct filtering of function call if no ref is passed", () => {
  const changeFn = vi.fn();

  const inputRef = { current: null };

  const emulateChange = useEmulatedFieldChange(inputRef, changeFn);

  emulateChange("Test Value");
  expect(changeFn).not.toHaveBeenCalled();
});
