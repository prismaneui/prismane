// Validator
import substring from "./substring";

test("Error: Value is not a substring", () => {
  const mainString = "hello world";
  const value = "example";
  expect(substring(value, mainString)).toBe(
    `This value must be a substring of ${mainString}!`
  );
});

test("No error: Value is a substring", () => {
  const mainString = "hello world";
  const value = "world";
  expect(substring(value, mainString)).toBe(null);
});
