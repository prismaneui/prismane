/**
 * uppercase
 * @param {string} value The value that should be validated
 * @returns {string | null}
 * @description Method that check if a string has only uppercase characters
 */
const uppercase = (
  value: string,
  regExp?: RegExp,
  fieldName?: string
): string | null => {
  const regex = regExp ?? /^[A-Z]+$/;

  if (!regex.test(value)) {
    return `${fieldName ?? "This value"} contains lowercase characters!`;
  }

  return null;
};

export default uppercase;
