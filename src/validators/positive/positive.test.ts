// Validator
import positive from "./positive";

test("Error: Value is not positive", () => {
  expect(positive(-1)).toBe("This number must be positive!");
  expect(positive(0)).toBe("This number must be positive!");
});

test("No error: Value is positive", () => {
  expect(positive(1)).toBe(null);
  expect(positive(100)).toBe(null);
});
