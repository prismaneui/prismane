// Validator
import match from "./match";

test("Normal error", () => {
  expect(match("1234", "123")).toBe(`Fields must match!`);
});

test("Complex error", () => {
  expect(match("1234", "123", "Passwords")).toBe(`Passwords must match!`);
});

test("No error", () => {
  expect(match("1234", "1234")).toBe(null);
});
