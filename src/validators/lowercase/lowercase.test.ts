// Validator
import lowercase from "./lowercase";

test("Error: Value contains uppercase characters", () => {
  // Value contains uppercase characters
  expect(lowercase("SomeLowercase")).toBe(
    "This value contains uppercase characters!"
  );

  // Value contains a mix of uppercase and lowercase characters
  expect(lowercase("MixedCase")).toBe(
    "This value contains uppercase characters!"
  );
});

test("No error: Value has only lowercase characters", () => {
  // Value has only lowercase characters
  expect(lowercase("alllowercase")).toBe(null);
});
