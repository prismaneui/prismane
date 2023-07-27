// Validator
import username from "./username";

test("Normal error", () => {
  expect(username("")).toBe(`This is not a valid username!`);
});

test("Uppercase error", () => {
  expect(username("DDDDDDD")).toBe(`This is not a valid username!`);
});

test("Character error", () => {
  expect(username("!!!!!!!!")).toBe(`This is not a valid username!`);
});

test("No error", () => {
  expect(username("spleafy")).toBe(null);
});
