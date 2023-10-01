// Validator
import starts from "./starts";

test("Error: Value does not start with the prefix", () => {
  const prefix = "hello";
  const value = "example-value";
  expect(starts(value, prefix)).toBe(`This value must start with ${prefix}!`);
});

test("No error: Value starts with the prefix", () => {
  const prefix = "hello";
  const value = "hello-world";
  expect(starts(value, prefix)).toBe(null);
});
