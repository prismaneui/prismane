// Validator
import email from "./email";

test("Normal error", () => {
  const emails = ["johndoe@gmail", "johndoe@gmail...com"];

  emails.forEach((address) => {
    expect(email(address)).toBe("This is not a valid email!");
  });
});

test("No error", () => {
  const emails = [
    "martinpetrov@my-shady-domain.io",
    "martinpetrov@my-shady-domain.college",
  ];

  emails.forEach((address) => {
    expect(email(address)).toBe(null);
  });
});
