// Validator
import more from "./more";

test("Error: Value is less than the allowed minimum", () => {
  const minAllowedValue = 10;

  // Value is less than the allowed minimum
  expect(more(5, minAllowedValue)).toBe(
    `This field must be more than ${minAllowedValue}!`
  );
});

test("No error: Value is greater than or equal to the allowed minimum", () => {
  const minAllowedValue = 10;

  // Value is greater than the allowed minimum
  expect(more(15, minAllowedValue)).toBe(null);

  // Value is equal to the allowed minimum
  expect(more(minAllowedValue, minAllowedValue)).toBe(null);
});
