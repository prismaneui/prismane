/**
 * between
 * @param {number} value The value that should be validated
 * @returns {string | null}
 * @description Method that check if a number is between a given set of numbers
 */
const between = (
  value: number,
  min: number,
  max: number,
  fieldName?: string
): string | null => {
  if (value > max || value < min) {
    return `${fieldName ?? "This number"} must be between ${min} and ${max}!`;
  }

  return null;
};

export default between;
