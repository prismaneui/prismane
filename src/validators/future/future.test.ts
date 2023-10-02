import future from "./future";

test("Error: Date is in the past or present", () => {
  const pastDate = new Date("2000-01-01");
  const presentDate = new Date();

  // Past date
  expect(future(pastDate)).toBe("This date must be in the future!");

  // Present date
  expect(future(presentDate)).toBe("This date must be in the future!");
});

test("No error: Date is in the future", () => {
  const futureDate = new Date("2430-12-31");

  // Future date
  expect(future(futureDate)).toBe(null);
});
