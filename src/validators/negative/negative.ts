/**
 * negative
 * @param {number} value The value that should be validated
 * @returns {string | null}
 * @description Method that check if a number is negative
 */
const negative = (value: number, fieldName?: string): string | null => {
  if (value >= 0) {
    return `${fieldName ?? "This number"} must be negative!`;
  }

  return null;
};

export default negative;
