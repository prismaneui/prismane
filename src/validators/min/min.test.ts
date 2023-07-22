import { expect, test } from "vitest";
// Validator
import min from "./min";

const field = "username";

const length = 4;

test("Normal error", () => {
  expect(min("", length)).toBe(
    `This field has to be longer than ${length} characters!`
  );
});

test("Complex error", () => {
  expect(min("", length, field)).toBe(
    `${field} has to be longer than ${length} characters!`
  );
});

test("No error", () => {
  expect(min("Hello, world!", length, field)).toBe(null);
});
