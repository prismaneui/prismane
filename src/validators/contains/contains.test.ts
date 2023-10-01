// Validator
import contains from "./contains";

test("Error: Value does not contain the substring", () => {
  const substring = "hello";

  // Value does not contain the substring
  expect(contains("This is a test", substring)).toBe(
    `This value must contain ${substring}!`
  );

  // Value is an empty string
  expect(contains("", substring)).toBe(`This value must contain ${substring}!`);
});

test("No error: Value contains the substring", () => {
  const substring = "hello";

  // Value contains the substring
  expect(contains("hello world", substring)).toBe(null);

  // Value is the same as the substring
  expect(contains(substring, substring)).toBe(null);
});
