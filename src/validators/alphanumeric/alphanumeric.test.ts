// Validator
import alphanumeric from "./alphanumeric";

test("Valid alphanumeric string", () => {
  const validStrings = ["hello123", "test123", "abc123", "123456"];
  validStrings.forEach((str) => {
    expect(alphanumeric(str)).toBeNull();
  });
});

test("Invalid alphanumeric string", () => {
  const invalidStrings = ["@#!", "spaces are not allowed", "hello world"];
  invalidStrings.forEach((str) => {
    expect(alphanumeric(str)).not.toBeNull();
  });
});
