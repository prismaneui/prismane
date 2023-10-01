/**
 * negative
 * @param {number} value The value that should be validated
 * @returns {string | null}
 * @description Method that check if a number is negative
 */
const negative = (value: number): string | null => {
  if (value >= 0) {
    return "This value must be a negative number!";
  }

  return null;
};

export default negative;
