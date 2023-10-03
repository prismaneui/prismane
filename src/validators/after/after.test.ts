// Validator
import after from "./after";

test("Date is before the target date", () => {
  const currentDate = new Date();
  const pastDate = new Date(currentDate);
  pastDate.setDate(currentDate.getDate() - 1);

  expect(after(pastDate, currentDate, "Event Date")).toBe(
    `Event Date must be after ${currentDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })}!`
  );
});

test("Date is after the target date", () => {
  const currentDate = new Date();
  const futureDate = new Date(currentDate);
  futureDate.setDate(currentDate.getDate() + 1);

  expect(after(futureDate, currentDate, "Event Date")).toBe(null);
});
