// Validator
import past from "./past";

test("Error: Date is not in the past", () => {
  // Date is not in the past
  const futureDate = new Date(Date.now() + 86400000); // Tomorrow
  expect(past(futureDate)).toBe("This date must be in the past");
});

test("No error: Date is in the past", () => {
  // Date is in the past
  const pastDate = new Date(Date.now() - 86400000); // Yesterday
  expect(past(pastDate)).toBe(null);

  // Date is the same as today (considered in the past)
  const today = new Date();
  expect(past(today)).toBe(null);
});
