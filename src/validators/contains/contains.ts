/**
 * contains
 * @param {string} value The value that should be validated
 * @returns {string | null}
 * @description Method that check if a string contains a given substring
 */
const contains = (
  value: string,
  substring: string,
  fieldName?: string
): string | null => {
  if (!value.includes(substring)) {
    return `${fieldName ?? "This value"} must contain '${substring}'!`;
  }

  return null;
};

export default contains;
