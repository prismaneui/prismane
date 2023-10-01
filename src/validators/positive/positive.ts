/**
 * positive
 * @param {number} value The value that should be validated
 * @returns {string | null}
 * @description Method that check if a number is positive
 */
const positive = (value: number): string | null => {
  if (value <= 0) {
    return "This value must be a positive number!";
  }

  return null;
};

export default positive;
