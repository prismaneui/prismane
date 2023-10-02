/**
 * substring
 * @param {string} value The value that should be validated
 * @returns {string | null}
 * @description Method that check if a string is a substring of a given string
 */
const substring = (
  value: string,
  string: string,
  fieldName?: string
): string | null => {
  if (!string.includes(value)) {
    return `${fieldName ?? "This value"} must be a substring of ${string}!`;
  }

  return null;
};

export default substring;
