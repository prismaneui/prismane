// Validator
import positive from "./positive";

test("Error: Value is not positive", () => {
  expect(positive(-1)).toBe("This value must be a positive number!");
  expect(positive(0)).toBe("This value must be a positive number!");
});

test("No error: Value is positive", () => {
  expect(positive(1)).toBe(null);
  expect(positive(100)).toBe(null);
});
