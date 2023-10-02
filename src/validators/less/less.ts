/**
 * less
 * @param {string} value The value that should be validated
 * @param {number} less The maximum value that a number can be
 * @param {string} fieldName The field name is needed, so that the validator return a more sensible message
 * @returns {string | null}
 * @description Method that validates if a number is less than a given number
 */
const less = (
  value: number,
  number: number,
  fieldName?: string
): string | null => {
  if (value > number) {
    return `${fieldName ?? "This number"} must be less than ${number}!`;
  }

  return null;
};

export default less;
