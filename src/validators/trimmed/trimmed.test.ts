// Validator
import trimmed from "./trimmed";

test("Error: More than one consecutive space", () => {
  const value = "This  value has  extra spaces";
  expect(trimmed(value)).toBe(
    "This value contains more than one consecutive space!"
  );
});

test("No error: One or zero consecutive spaces", () => {
  const value1 = "This value has no extra spaces";
  const value2 = "This value has one space ";
  expect(trimmed(value1)).toBe(null);
  expect(trimmed(value2)).toBe(null);
});
