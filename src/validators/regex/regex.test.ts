// Validator
import regex from "./regex";

const validRegExp = /^[a-z0-9_-]{4,255}$/;

test("Error: Value does not match the regex", () => {
  expect(regex("INVALID", validRegExp)).toBe(
    "This value does not match the given pattern!"
  );
});

test("No error: Value matches the regex", () => {
  expect(regex("valid-value", validRegExp)).toBe(null);
});
