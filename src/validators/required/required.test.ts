// Validator
import required from "./required";

test("Normal error", () => {
  expect(required("")).toBe(`This field is required!`);
});

test("No error - boolean", () => {
  expect(required(false)).toBe(null);
});

test("No error - string", () => {
  expect(required("Hello, world!")).toBe(null);
});
