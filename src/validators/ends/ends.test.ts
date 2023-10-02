// Validator
import ends from "./ends";

test("Error: Value does not end with the suffix", () => {
  const suffix = "end";

  // Value does not end with the suffix
  expect(ends("This is a test", suffix)).toBe(
    `This value must end with '${suffix}'!`
  );

  // Value is an empty string
  expect(ends("", suffix)).toBe(`This value must end with '${suffix}'!`);
});

test("No error: Value ends with the suffix", () => {
  const suffix = "suffix";

  // Value ends with the suffix
  expect(ends("This is a test with a suffix", suffix)).toBe(null);

  // Value is the same as the suffix
  expect(ends(suffix, suffix)).toBe(null);
});
