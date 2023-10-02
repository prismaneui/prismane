// Validator
import between from "./between";

test("Error: Value is outside the specified range", () => {
  const minValue = 10;
  const maxValue = 20;

  // Value outside the range
  expect(between(5, minValue, maxValue)).toBe(
    `This number must be between ${minValue} and ${maxValue}!`
  );

  // Value outside the range
  expect(between(25, minValue, maxValue)).toBe(
    `This number must be between ${minValue} and ${maxValue}!`
  );
});

test("No error: Value is within the specified range", () => {
  const minValue = 10;
  const maxValue = 20;

  // Value within the range
  expect(between(15, minValue, maxValue)).toBe(null);

  // Minimum value
  expect(between(minValue, minValue, maxValue)).toBe(null);

  // Maximum value
  expect(between(maxValue, minValue, maxValue)).toBe(null);
});
