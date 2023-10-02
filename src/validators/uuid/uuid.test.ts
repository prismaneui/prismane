// Validator
import uuid from "./uuid";

test("Error: Invalid UUID format", () => {
  const invalidUUID = "invaliduuid123";
  expect(uuid(invalidUUID)).toBe("This is not a valid ID!");
});

test("No error: Valid UUID format", () => {
  const validUUID = "1a2b3c4d5e6f7890"; // 16 characters hexadecimal
  expect(uuid(validUUID)).toBe(null);
});
