import { expect, test } from "vitest";
// Validator
import username from "./email";

test("Normal error", () => {
  expect(username("johndoe@gmail")).toBe(`This is not a valid email!`);
});

test("No error", () => {
  expect(username("martinpetrov@prismane.io")).toBe(null);
});
