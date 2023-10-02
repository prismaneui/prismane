// Validator
import validate from "./validate";

const mockValidators = {
  required: (value: any) => (value ? null : "Value is required."),
  minLength: (value: any) =>
    value.length >= 5 ? null : "Value must be at least 5 characters long.",
};

describe("validate function", () => {
  test("should return null for valid input", async () => {
    const value = "hello world";
    const error = await validate(value, mockValidators);
    expect(error).toBeNull();
  });

  test("should return an error for null value with required validator", async () => {
    const value = null;
    const error = await validate(value, { required: mockValidators.required });
    expect(error).toBe("Value is required.");
  });

  test("should return an error for empty string with required validator", async () => {
    const value = "";
    const error = await validate(value, { required: mockValidators.required });
    expect(error).toBe("Value is required.");
  });

  test("should return an error for short string with minLength validator", async () => {
    const value = "1234";
    const error = await validate(value, {
      minLength: mockValidators.minLength,
    });
    expect(error).toBe("Value must be at least 5 characters long.");
  });

  test("should return null for valid input with multiple validators", async () => {
    const value = "hello";
    const error = await validate(value, {
      required: mockValidators.required,
      minLength: mockValidators.minLength,
    });
    expect(error).toBeNull();
  });
});
