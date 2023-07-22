import { expect, test } from "vitest";
// Validator
import min from "./max";

const field = "username";

const length = 4;

test("Normal error", () => {
  expect(min("Hello, world!", length)).toBe(
    `This field has to be shorter than ${length} characters!`
  );
});

test("Complex error", () => {
  expect(min("Hello, world!", length, field)).toBe(
    `${field} has to be shorter than ${length} characters!`
  );
});

test("No error", () => {
  expect(min("", length, field)).toBe(null);
});
