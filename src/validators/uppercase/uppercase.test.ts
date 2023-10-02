// Validator
import uppercase from "./uppercase";

test("Error: Lowercase characters", () => {
  const value = "UPPerCASE";
  expect(uppercase(value)).toBe("This value contains lowercase characters!");
});

test("No error: All uppercase characters", () => {
  const value1 = "UPPERCASE";
  const value2 = "ANOTHERUPPERCASE";
  expect(uppercase(value1)).toBe(null);
  expect(uppercase(value2)).toBe(null);
});
