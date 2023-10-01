// Validator
import multiple from "./multiple";

test("Error: Value is not a multiple of the given number", () => {
  const multipleOf = 5;

  // Value is not a multiple of the given number
  expect(multiple(13, multipleOf)).toBe(
    `This value must be multiple of ${multipleOf}!`
  );
});

test("No error: Value is a multiple of the given number", () => {
  const multipleOf = 3;

  // Value is a multiple of the given number
  expect(multiple(12, multipleOf)).toBe(null);

  // Value is zero (considered a multiple of any number)
  expect(multiple(0, multipleOf)).toBe(null);
});
