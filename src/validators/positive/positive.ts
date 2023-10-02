/**
 * positive
 * @param {number} value The value that should be validated
 * @returns {string | null}
 * @description Method that check if a number is positive
 */
const positive = (value: number, fieldName?: string): string | null => {
  if (value <= 0) {
    return `${fieldName ?? "This number"} must be positive!`;
  }

  return null;
};

export default positive;
