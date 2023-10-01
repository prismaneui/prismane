// Validator
import less from "./less";

test("Error: Value is greater than the allowed maximum", () => {
  const maxAllowedValue = 10;

  // Value is greater than the allowed maximum
  expect(less(15, maxAllowedValue)).toBe(
    `This field must be less than ${maxAllowedValue}!`
  );
});

test("No error: Value is less than the allowed maximum", () => {
  const maxAllowedValue = 10;

  // Value is less than the allowed maximum
  expect(less(5, maxAllowedValue)).toBe(null);

  // Value is equal to the allowed maximum
  expect(less(maxAllowedValue, maxAllowedValue)).toBe(null);
});
